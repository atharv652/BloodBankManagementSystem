package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.DonorHistory;

public interface DonorHistoryRepository extends JpaRepository<DonorHistory, Integer> {

}
