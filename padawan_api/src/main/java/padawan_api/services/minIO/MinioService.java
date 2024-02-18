package padawan_api.services.minIO;
import io.minio.BucketExistsArgs;
import io.minio.ListObjectsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidResponseException;
import io.minio.errors.MinioException;
import io.minio.errors.ServerException;
import io.minio.errors.XmlParserException;
import io.minio.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

@Service
public class MinioService {

    @Autowired
    private MinioClient minioClient;

    @Value("${minio.bucketName}")
    private String bucketName;

    public void uploadFile(MultipartFile file) throws IOException, NoSuchAlgorithmException, InvalidKeyException, ServerException, ErrorResponseException, InsufficientDataException, InternalException, InvalidResponseException, XmlParserException {
        try {
            // Verifica se o bucket existe, caso contrário, cria
            boolean bucketExists = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (!bucketExists) {
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
            }

            // Faz o upload do arquivo para o MinIO
            minioClient.putObject(PutObjectArgs.builder()
                    .bucket(bucketName)
                    .object(file.getOriginalFilename())
                    .stream(file.getInputStream(), file.getSize(), -1)
                    .contentType(file.getContentType())
                    .build());
        } catch (MinioException e) {
            // Lida com exceções do MinIO
            e.printStackTrace();
            throw e;
        }
    }

    public List<String> listFiles() throws IOException, InvalidKeyException, NoSuchAlgorithmException, ServerException, ErrorResponseException, InsufficientDataException, InternalException, InvalidResponseException, XmlParserException {
        try {
            // Verifica se o bucket existe
            boolean bucketExists = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (!bucketExists) {
                throw new IllegalStateException("O bucket " + bucketName + " não existe.");
            }

            // Lista os objetos no bucket
            Iterable<Result<io.minio.messages.Item>> results = minioClient.listObjects(ListObjectsArgs.builder().bucket(bucketName).build());
            List<String> fileNames = new ArrayList<>();
            for (Result<io.minio.messages.Item> result : results) {
                io.minio.messages.Item item = result.get();
                fileNames.add(item.objectName());
            }
            return fileNames;
        } catch (MinioException e) {
            // Lida com exceções do MinIO
            e.printStackTrace();
            throw e;
        }
    }
}
