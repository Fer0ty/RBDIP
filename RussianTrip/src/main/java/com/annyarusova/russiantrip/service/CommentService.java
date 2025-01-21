package com.annyarusova.russiantrip.service;

import com.annyarusova.russiantrip.dto.CommentDto;
import com.annyarusova.russiantrip.entity.CommentEntity;
import com.annyarusova.russiantrip.entity.PlaceEntity;
import com.annyarusova.russiantrip.entity.UserEntity;
import com.annyarusova.russiantrip.repository.CommentRepository;
import com.annyarusova.russiantrip.repository.PlaceRepository;
import com.annyarusova.russiantrip.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final PlaceRepository placeRepository;
    private final AuthService authService;

    public CommentEntity addComment(Integer id, CommentDto commentDto) {
        UserEntity user = authService.getAuthenticatedUser();

        PlaceEntity place = placeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Место не найдено"));

        CommentEntity comment = new CommentEntity();
        comment.setName(commentDto.getName());
        comment.setDescription(commentDto.getDescription());
        comment.setRatingNumeric(commentDto.getRatingNumeric());
        comment.setCommentDate(LocalDate.now()); // Устанавливаем текущую дату как дату комментария
        comment.setAuthorLogin(user);
        comment.setPlaceId(place);

        if (place.getAmountComments() != 0) {
            double averageRating = (place.getRatingNumeric() * place.getAmountComments() + comment.getRatingNumeric())
                    / (place.getAmountComments() + 1);

            place.setRatingNumeric(averageRating); // Обновляем рейтинг места
        } else {
            place.setRatingNumeric(commentDto.getRatingNumeric());
        }
        place.setAmountComments(place.getAmountComments() + 1);

        placeRepository.save(place);
        return commentRepository.save(comment);
    }

    public void deleteComment(Integer commentId) {
        CommentEntity existingComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("Комментарий не найден"));

        PlaceEntity place = existingComment.getPlaceId();
        if (place != null) {
            // Удаляем комментарий и пересчитываем рейтинг места
            commentRepository.delete(existingComment);

            if (place.getAmountComments() > 1) {
                double averageRating = (place.getRatingNumeric() * place.getAmountComments() - existingComment.getRatingNumeric())
                        / (place.getAmountComments() - 1);
                place.setRatingNumeric(averageRating);
                place.setAmountComments(place.getAmountComments() - 1);
            } else {
                place.setRatingNumeric(0);
                place.setAmountComments(0);
            }
            placeRepository.save(place);
        }
    }

    public List<CommentEntity> getCommentsForPlace(Integer placeId) {
        return commentRepository.findAll().stream()
                .filter(comment -> comment.getPlaceId() != null && comment.getPlaceId().getPlaceId().equals(placeId))
                .toList();
    }

    public boolean isCommentOwner(Integer placeId, UserEntity user) {
        return commentRepository.existsByIdAndAuthor(placeId, user);
    }
}
