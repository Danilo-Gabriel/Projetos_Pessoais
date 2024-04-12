package padawan_api.services.redis;


import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;




@Repository
public class RedisService {



    public static final String HASH_KEY = "token";


    private final RedisTemplate<String, Object> redisTemplate;

    public RedisService(RedisTemplate<String, Object> redisTemplate){
        this.redisTemplate = redisTemplate;
    }

    public UserDetails save (UserDetails dados){
        redisTemplate.opsForHash().put(HASH_KEY, dados.getUsername(), dados);
        return dados;
    }

    public UserDetails findByLogin(String login) {
        
     UserDetails user = (UserDetails) redisTemplate.opsForHash().get(HASH_KEY, login);

     if(user == null){
        return null;
     }else{
        return (UserDetails) redisTemplate.opsForHash().get(HASH_KEY, login);
     }
        
    }

    public void deletarAllRedis(){
        redisTemplate.delete(HASH_KEY);
    }



}
