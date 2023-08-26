package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService {

	@Autowired
	RoleRepository rrepo;
	
	public Role getRole(int role_id)
	{
		Role r;
		Optional<Role> o1 = rrepo.getRole( role_id);
		try {
			r=o1.get();
		}
		catch(Exception e)
		{
			r=null;
		}
		return r;
	}
}
