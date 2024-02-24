package padawan_api.services.security;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
 @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/***")
            .allowedOrigins("*") // Permitir acesso a partir do Angular
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowCredentials(true)
            .exposedHeaders("Access-Control-Allow-Origin");
    }
    
}

