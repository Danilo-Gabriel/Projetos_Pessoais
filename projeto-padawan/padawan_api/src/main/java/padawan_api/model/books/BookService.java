package padawan_api.model.books;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {
    
    private final BookRepository bookRepository;

    private final ImageStorageService imageStorageService;

    public Book saveBook(Book book, MultipartFile imageFile){
        try {
            String imageUrl = imageStorageService.uploadImage(imageFile);
            book.setImageUrl(imageUrl);
            return bookRepository.save(book);
        } catch (Exception e) {
            throw new RuntimeException("Failed to save book.", e);
        }
    }


    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }


}
