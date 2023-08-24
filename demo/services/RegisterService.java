
package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Register;

@Service
public interface RegisterService {

	public Register saveRegister(Register register);
}