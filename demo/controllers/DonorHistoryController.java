package com.example.demo.controllers;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DonorHistory;
import com.example.demo.repositories.DonorHistoryRepository;

@RestController
@RequestMapping("/donor-history")
@CrossOrigin(origins = "http://localhost:3000")
public class DonorHistoryController {
    @Autowired
    private DonorHistoryRepository donorHistoryRepository;

    @PostMapping("/add")
    public ResponseEntity<String> bookAppointment(@RequestBody DonorHistory donorHistory) {
        donorHistoryRepository.save(donorHistory);
        return ResponseEntity.ok("Appointment booked successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<DonorHistory> getDonorHistoryById(@PathVariable Integer id) {
        Optional<DonorHistory> donorHistory = donorHistoryRepository.findById(id);
        if (donorHistory.isPresent()) {
            return ResponseEntity.ok(donorHistory.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
