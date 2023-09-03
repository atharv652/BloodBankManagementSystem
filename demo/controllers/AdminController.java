package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Admin;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.repositories.AdminRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;
	
	@PostMapping("/adminC")
	ResponseEntity<String> newAdmin(@RequestBody Admin newAdmin) {
        adminRepository.save(newAdmin);
		return ResponseEntity.ok("Admin created successfully");	
		}
	
	@GetMapping("/stock")
    @ResponseBody // Add this annotation
    List<Admin> getAllStock() {
        return adminRepository.findAll();
    }
	
	@GetMapping("/adminC/{id}")
	Admin getAdminById(@PathVariable Integer id) {
	return adminRepository.findById(id)
			.orElseThrow(()->new ItemNotFoundException(id));
	}
	
	@PutMapping("/adminC/{id}")
    ResponseEntity<Admin> updateAdmin(@RequestBody Admin newAdmin, @PathVariable Integer id) {
        return adminRepository.findById(id)
            .map(admin -> {
                admin.setBlood_grp(newAdmin.getBlood_grp());
                admin.setQty(newAdmin.getQty());
                admin.setDesc(newAdmin.getDesc());
                Admin updatedAdmin = adminRepository.save(admin);
                return ResponseEntity.ok(updatedAdmin);
            })
            .orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/adminC/{id}")
	String deleteAdmin(@PathVariable Integer id) {
	    if (!adminRepository.existsById(id)) { 
	        throw new ItemNotFoundException(id); 
	    }
	    
	    adminRepository.deleteById(id); // 
	    return "Item with id " + id + " has been deleted";
	}

}