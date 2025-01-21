package com.annyarusova.russiantrip.service;

import com.annyarusova.russiantrip.dto.PlaceDto;
import com.annyarusova.russiantrip.entity.PlaceEntity;
import com.annyarusova.russiantrip.entity.UserEntity;
import com.annyarusova.russiantrip.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;
    private final AuthService authService;

    public PlaceEntity createPlace(PlaceDto place) {
        UserEntity user = authService.getAuthenticatedUser();
        return placeRepository.save(mapToPlaceEntity(place, user.getLogin()));
    }

    public Optional<PlaceEntity> getPlace(Integer id) {
        return placeRepository.findById(id);
    }

    public List<PlaceEntity> getAllPlaces() {
        UserEntity user = authService.getAuthenticatedUser();
        // Получаем все места и фильтруем по авторству или открытому доступу
        return placeRepository.findAll().stream()
                .filter(place -> place.getUserLogin().equals(user.getLogin()) || place.isAccess())
                .collect(Collectors.toList());
    }

    public PlaceEntity updatePlace(Integer id, PlaceDto updatedPlace) {
        PlaceEntity existingPlace = placeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Место не найдено"));

        // Обновляем данные места
        existingPlace.setName(updatedPlace.getName());
        existingPlace.setDescription(updatedPlace.getDescription());
        existingPlace.setLocation(updatedPlace.getLocation());
        existingPlace.setAccess(updatedPlace.getAccess()); // Обновление доступа

        return placeRepository.save(existingPlace);
    }

    public void deletePlace(Integer id) {
        placeRepository.deleteById(id);
    }

    public boolean isPlaceOwner(Integer placeId, UserEntity user) {
        return placeRepository.existsByIdAndAuthor(placeId, user.getLogin());
    }
    public boolean isOpenAccess(Integer placeId) {
        PlaceEntity existingPlace = placeRepository.findById(placeId)
                .orElseThrow(() -> new IllegalArgumentException("Место не найдено"));
        return existingPlace.isAccess();
    }

    private PlaceEntity mapToPlaceEntity(PlaceDto placeDto, String user) {
        PlaceEntity placeEntity = new PlaceEntity();
        placeEntity.setUserLogin(user);
        placeEntity.setName(placeDto.getName());
        placeEntity.setDescription(placeDto.getDescription());
        placeEntity.setLocation(placeDto.getLocation());
        placeEntity.setAmountComments(0);
        placeEntity.setRatingNumeric(0);
        placeEntity.setAccess(placeDto.getAccess());
        return placeEntity;
    }
}
