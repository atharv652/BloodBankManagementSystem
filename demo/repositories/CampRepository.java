package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Camp;

public interface CampRepository extends JpaRepository<Camp, Integer> {

}
