package com.annyarusova.russiantrip.repository;

import com.annyarusova.russiantrip.entity.PlaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface PlaceRepository extends JpaRepository<PlaceEntity, Integer> {
    @Query("select (count(p) > 0) from PlaceEntity p where p.placeId = :id and p.userLogin = :author")
    boolean existsByIdAndAuthor(@Param("id") Integer id, @Param("author") String author);
}
