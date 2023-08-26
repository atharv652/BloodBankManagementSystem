package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Register;
import com.example.demo.repositories.RegisterRepository;
@Service
public class RegisterServiceMpl implements RegisterService {

	@Autowired
	private RegisterRepository registerRepository;
	@Override
	public Register saveRegister(Register register) {
		return registerRepository.save(register);
	}
}
