package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Register;
import com.example.demo.services.RegisterService;

@RestController
@RequestMapping("/register1")
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

	@Autowired
	private RegisterService registerService;
	
	@PostMapping("/add")
	public String add(@RequestBody Register register)
	{
		registerService.saveRegister(register);
		return "Successfully Registered";
	}
}
