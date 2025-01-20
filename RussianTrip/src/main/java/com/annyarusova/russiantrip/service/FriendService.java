package com.annyarusova.russiantrip.service;

import com.annyarusova.russiantrip.dto.UserPersonalData;
import com.annyarusova.russiantrip.entity.UserEntity;
import com.annyarusova.russiantrip.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FriendService {
    private final UserRepository userRepository;

    public void addFriend(String user, String friend_login) {
        Optional<UserEntity> friend = getUserEntity(friend_login);
        Optional<UserEntity> userEntity = getUserEntity(user);

        if (userEntity.get().getFriends().contains(friend.get()))
            throw new IllegalArgumentException("User with login " + user + " already has friend with login " + friend_login);

        userEntity.get().getFriends().add(friend.get());
        userRepository.save(userEntity.get());
    }

    public void removeFriend(String user, String friend_login) {
        Optional<UserEntity> friend = getUserEntity(friend_login);
        Optional<UserEntity> userEntity = getUserEntity(user);

        if (!userEntity.get().getFriends().contains(friend.get()))
            throw new IllegalArgumentException("User with login " + user + " does not have friend with login " + friend_login);

        userEntity.get().getFriends().remove(friend.get());
        userRepository.save(userEntity.get());
    }

    public List<UserPersonalData> getFriends(String user) {
        Optional<UserEntity> userEntity = userRepository.findByLogin(user);
        if (userEntity.isEmpty())
            throw new IllegalArgumentException("User with login " + user + " not found");

        return userEntity.get().getFriends().stream().map(UserPersonalData::new).collect(Collectors.toList());
    }

    private Optional<UserEntity> getUserEntity(String login) {
        Optional<UserEntity> user = userRepository.findByLogin(login);
        if (user.isEmpty())
            throw new IllegalArgumentException("User with login " + login + " not found");
        return user;
    }
}
