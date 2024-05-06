package padawan_api.model.usuario.services;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import io.minio.GetObjectArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidResponseException;
import io.minio.errors.ServerException;
import io.minio.errors.XmlParserException;
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

        String uuid = UUID.randomUUID().toString();

        if (file == null) {
            throw new IllegalArgumentException("File must not be null");
        }


        try (InputStream is = file.getInputStream()) {
            minioClient.putObject(
                PutObjectArgs.builder()
                    .bucket(bucketName)
                    .object(uuid)
                    .contentType(file.getContentType())
                    .stream(is, is.available(), -1)
                    .build());
            return uuid;
    
        } catch (Exception e) {
            throw new RuntimeException("Failed to store image file.", e);
        } 
    }

    public String getImage(String id) throws InvalidKeyException, ErrorResponseException, InsufficientDataException, InternalException, InvalidResponseException, NoSuchAlgorithmException, ServerException, XmlParserException, IllegalArgumentException, IOException {
  
        
        try (InputStream stream = minioClient.getObject(
             GetObjectArgs.builder()
            .bucket(bucketName)
            .object(id)
            .build())
            )
        {

            String imageBase64 = this.inputStreamToBase64(stream);
            return imageBase64;

        }
            
    }


    // METODO PARA CONVERTER INPUTSTREAM EM BASE64
    private String inputStreamToBase64(InputStream sourceStream) throws IOException {
        
        byte[] sourceBytes = IOUtils.toByteArray(sourceStream);

        String imageBase64 = Base64.getEncoder().encodeToString(sourceBytes); 

        return imageBase64;
    }
    

    private String generateFileName(MultipartFile file) {
        return new Date().getTime() + "-" + Objects.requireNonNull(file.getOriginalFilename()).replace(" ", "_");
    }
}
