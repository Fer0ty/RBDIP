package com.annyarusova.russiantrip.controller;

import com.annyarusova.russiantrip.service.VisitedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/regions")
@CrossOrigin
@RequiredArgsConstructor
public class VisitedController {
    
    private final VisitedService visitedService;

    @GetMapping
    public ResponseEntity<?> getAllRegions(@RequestParam String login) {
        try {
            return ResponseEntity.ok(visitedService.getRegionRepository(login));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body("Произошла ошибка во время выполнения запроса");
        }
    }

    @PostMapping
    public ResponseEntity<?> visitRegion(@RequestParam String login, @RequestParam Integer regionId) {
        try {
            visitedService.visitRegion(login, regionId);
            return ResponseEntity.ok("Регион посещен");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping
    public ResponseEntity<?> unvisitRegion(@RequestParam String login, @RequestParam Integer regionId) {
        try {
            visitedService.unvisitRegion(login, regionId);
            return ResponseEntity.ok("Регион удален из посещенных");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/percent")
    public ResponseEntity<?> getPercent(@RequestParam String login) {
        try {
            return ResponseEntity.ok(visitedService.getVisitedPercent(login));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
