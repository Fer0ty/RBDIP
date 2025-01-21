package com.annyarusova.russiantrip.service;

import com.annyarusova.russiantrip.config.SecurityConfiguration;
import com.annyarusova.russiantrip.dto.RegistrationDto;
import com.annyarusova.russiantrip.dto.UserPersonalData;
import com.annyarusova.russiantrip.entity.MapEntity;
import com.annyarusova.russiantrip.entity.UserEntity;
import com.annyarusova.russiantrip.repository.MapRepository;
import com.annyarusova.russiantrip.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final MapRepository mapRepository;

    public UserPersonalData register(RegistrationDto data) {
        if (userRepository.findByLogin(data.getLogin()).isPresent())
        {
            throw new IllegalArgumentException("Логин " + data.getLogin() + " уже занят");
        }
        UserEntity userEntity = mapToUserEntity(data);
        userRepository.save(userEntity);
        mapRepository.save(createMapEntity(userEntity));
        return new UserPersonalData(userRepository.save(userEntity));
    }

    public Optional<UserEntity> findByLogin(@NonNull String login) {
        return userRepository.findByLogin(login);
    }

    private UserEntity mapToUserEntity(RegistrationDto userPersonalData) {
        UserEntity userEntity = new UserEntity();
        userEntity.setLogin(userPersonalData.getLogin());
        userEntity.setName(userPersonalData.getName());
        userEntity.setSurname(userPersonalData.getSurname());
        userEntity.setBirtDate(userPersonalData.getBirtDate());
        userEntity.setPassword(SecurityConfiguration.passwordEncoder().encode(userPersonalData.getPassword()));
        return userEntity;
    }
    private MapEntity createMapEntity(UserEntity user) {
        MapEntity mapEntity = new MapEntity();
        mapEntity.setLogin(user);
        mapEntity.setCreationDate(LocalDate.now());
        mapEntity.setAccess(false);
        mapEntity.setPercentVisited(0);
        return mapEntity;
    }
}
