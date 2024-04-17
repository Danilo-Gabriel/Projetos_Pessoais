package padawan_api.services.security.jwt.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

        public WebMvcConfigurer configurer(){
                return new WebMvcConfigurer() {
        @Override
         public void addCorsMappings(CorsRegistry registry) { 
          registry.addMapping("/**")
                  .allowedOrigins("http://localhost:4200")
                  .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                  .allowedHeaders("*")
                  .allowCredentials(true)
                  .maxAge(3600);
                }
        };
    }

}

