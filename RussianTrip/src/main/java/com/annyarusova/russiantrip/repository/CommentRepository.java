package com.annyarusova.russiantrip.repository;

import com.annyarusova.russiantrip.entity.CommentEntity;

import com.annyarusova.russiantrip.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CommentRepository extends JpaRepository<CommentEntity, Integer> {
    @Query("select (count(c) > 0) from CommentEntity c where c.commentId = :id and c.userLogin = :author")
    boolean existsByIdAndAuthor(@Param("id") Integer id, @Param("author") String authorLogin);
}
