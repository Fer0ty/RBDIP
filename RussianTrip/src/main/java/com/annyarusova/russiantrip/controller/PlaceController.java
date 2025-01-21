package com.annyarusova.russiantrip.controller;

import com.annyarusova.russiantrip.dto.CommentDto;
import com.annyarusova.russiantrip.dto.PlaceDto;
import com.annyarusova.russiantrip.entity.CommentEntity;
import com.annyarusova.russiantrip.entity.PlaceEntity;
import com.annyarusova.russiantrip.service.CommentService;
import com.annyarusova.russiantrip.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/places")
@CrossOrigin
@RequiredArgsConstructor
public class PlaceController {
    private final PlaceService placeService;
    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<PlaceEntity> createPlace(@RequestBody PlaceDto place) {
        PlaceEntity createdPlace = placeService.createPlace(place);
        return ResponseEntity.ok(createdPlace);
    }

    @GetMapping("/{id}")
    @PreAuthorize("@securityService.canGetPlace(#id)")
    public ResponseEntity<PlaceEntity> getPlace(@PathVariable Integer id) {
        return placeService.getPlace(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<PlaceEntity>> getAllPlaces() {
        List<PlaceEntity> places = placeService.getAllPlaces();
        return ResponseEntity.ok(places);
    }

    @PutMapping("/{id}")
    @PreAuthorize("@securityService.canEditPlace(#id)")
    public ResponseEntity<PlaceEntity> updatePlace(@PathVariable Integer id, @RequestBody PlaceDto updatedPlace) {
        return ResponseEntity.ok(placeService.updatePlace(id, updatedPlace));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("@securityService.canEditPlace(#id)")
    public ResponseEntity<Void> deletePlace(@PathVariable Integer id) {
        placeService.deletePlace(id);
        return ResponseEntity.noContent().build();
    }
}
