package com.example.demo.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Donor;
import com.example.demo.repositories.DonorRepository;

@Service
public class DonorService {
	DonorRepository drepo;
	
	public Donor getDonor(int did)
	{
		Donor d;
		Optional<Donor> o1 = drepo.getDonor(did);
		try {
			d = o1.get();
		}
		catch(Exception e)
		{
			d = null;
		}
		return d;
	}
}



