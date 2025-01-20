package com.annyarusova.russiantrip.controller;

import com.annyarusova.russiantrip.service.FriendService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/friends")
@CrossOrigin
@RequiredArgsConstructor
public class FriendController {

    private final FriendService friendService;

    @PostMapping
    public ResponseEntity<?> addFriend(@RequestParam String user, @RequestParam String friendLogin) {
        try {
            friendService.addFriend(user, friendLogin);
            return ResponseEntity.ok("Друг успешно добавлен");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping
    public ResponseEntity<?> removeFriend(@RequestParam String user, @RequestParam String friendLogin) {
        try {
            friendService.removeFriend(user, friendLogin);
            return ResponseEntity.ok("Друг успешно удален");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> getFriends(@RequestParam String user) {
        try {
            return ResponseEntity.ok(friendService.getFriends(user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
