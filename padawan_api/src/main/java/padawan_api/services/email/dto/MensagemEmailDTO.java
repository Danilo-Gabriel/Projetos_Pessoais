package padawan_api.services.email.dto;

public class MensagemEmailDTO {

   public String from;

   private String subject;

   private String body;

   private String hash;

   public String getFrom() {
    return from;
}

public void setFrom(String from) {
    this.from = from;
}

public String getSubject() {
    return subject;
}

public void setSubject(String subject) {
    this.subject = subject;
}

public String getBody() {
    return body;
}

public void setBody(String body) {
    this.body = body;
}

public String getHash(){
    return this.hash;
}

public void setHash(String hash){
    this.hash = hash;
}

public MensagemEmailDTO(){
    this.from = "danilonascimento.dr@gmail.com";
    this.subject = "LINK PARA RECUPERAÇÃO DE SENHA";
    this.body = "ACESSO PARA RECUPERAÇÃO DE SENHA: "+
    "";
   }

   
    
}
