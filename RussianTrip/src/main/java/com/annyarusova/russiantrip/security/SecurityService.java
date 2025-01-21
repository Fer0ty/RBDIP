package com.annyarusova.russiantrip.security;

import com.annyarusova.russiantrip.entity.UserEntity;
import com.annyarusova.russiantrip.service.AuthService;
import com.annyarusova.russiantrip.service.CommentService;
import com.annyarusova.russiantrip.service.PlaceService;
import com.annyarusova.russiantrip.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SecurityService {
    private final AuthService authService;
    private final PlaceService placeService;
    private final CommentService commentService;

    public boolean canEditPlace(Integer placeId) {
        UserEntity user = authService.getAuthenticatedUser();
        return placeService.isPlaceOwner(placeId, user);
    }
    public boolean canGetPlace(Integer placeId) {
        UserEntity user = authService.getAuthenticatedUser();
        return placeService.isOpenAccess(placeId) || placeService.isPlaceOwner(placeId, user);
    }

    public boolean canEditComment(Integer commentId) {
        UserEntity user = authService.getAuthenticatedUser();
        return commentService.isCommentOwner(commentId, user);
    }
}
