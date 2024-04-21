package padawan_api.model.usuario.services;

import java.io.InputStream;
import java.util.Date;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class ImageStorageService {
    
    
    @Autowired
    private final MinioClient minioClient;

    @Value("${minio.bucket.name}")
    private String bucketName;

    @Value("${minio.url}")
    private String minioUrl;

    public String uploadImage(MultipartFile file) {
        if (file == null) {
            throw new IllegalArgumentException("File must not be null");
        }
        String fileName = generateFileName(file);
        try (InputStream is = file.getInputStream()) {
            minioClient.putObject(
                PutObjectArgs.builder()
                    .bucket(bucketName)
                    .object(fileName)
                    .contentType(file.getContentType())
                    .stream(is, is.available(), -1)
                    .build());
            return minioUrl + "/" + bucketName + "/" + fileName;
    
        } catch (Exception e) {
            throw new RuntimeException("Failed to store image file.", e);
        }
    }
    

    private String generateFileName(MultipartFile file) {
        return new Date().getTime() + "-" + Objects.requireNonNull(file.getOriginalFilename()).replace(" ", "_");
    }
}
