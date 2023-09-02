package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Donor;
import com.example.demo.entities.DonorCheck;
import com.example.demo.repositories.DonorRepository;
import com.example.demo.services.DonorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DonorController {

	@Autowired
	DonorService dservice;
	
	@PostMapping("/chkDonor")
	public Donor ChkDonor(@RequestBody DonorCheck dcheck)
	{
		System.out.println("in DonorCheck :");
		return dservice.getDonor(dcheck.getDid());
	}
}
