package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
import com.example.demo.entities.RoleCheck;
import com.example.demo.services.RoleService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RoleController {
	
	@Autowired
	RoleService rservice;
	
	@PostMapping("/chkRole")
	public Role chkRole(@RequestBody RoleCheck rcheck)
	{
		System.out.println("in Role check :");
		return rservice.getRole(rcheck.getRole_id());
	}
}
