package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

	@Query("Select r from Role r where role_id = :role_id")
	public Optional<Role> getRole(int role_id);
}

