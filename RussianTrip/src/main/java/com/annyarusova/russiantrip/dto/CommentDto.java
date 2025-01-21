package com.annyarusova.russiantrip.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Integer commentId;
    private String name;
    private String description;
    private Integer ratingNumeric;
}

