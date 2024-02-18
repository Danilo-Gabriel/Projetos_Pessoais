package padawan_api.services.minIO;

import io.minio.MinioClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MinioConfig {

    @Bean
    public MinioClient minioClient() {
        // Configure your MinIO client here
        MinioClient minioClient = MinioClient.builder()
                                    .endpoint("http://172.18.0.4:9000")
                                    .credentials("minioadmin", "minioadmin")
                                    .build();
        return minioClient;
    }
}
