package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Register;

public interface RegisterRepository extends JpaRepository<Register, Integer>{

}
