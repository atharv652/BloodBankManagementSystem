package com.example.demo.repositories;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Donor;


public interface DonorRepository extends JpaRepository<Donor, Integer> {
	@Query("Select d from Donor d where did = : did")
	public Optional<Donor> getDonor(int did);
}

//@Query("select l from Login l where username = :username and password = :password")
//public Optional<Login> getLogin(String username,String password);