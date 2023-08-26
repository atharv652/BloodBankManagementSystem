package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.example.demo.entities.Camp;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.repositories.CampRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CampController {
	@Autowired
	private CampRepository crepo;
	@PostMapping("/campC")
	ResponseEntity<String> camp(@RequestBody Camp camp)
	{
		crepo.save(camp);
		return ResponseEntity.ok("Camp Created Successfully");
	}
	
	@GetMapping("/camp")
	@ResponseBody
	List<Camp>getAllCamp(){
		 return crepo.findAll();
	}
	
	@GetMapping("/campC/{id}")
	Camp getCampById(@PathVariable Integer id) {
		return crepo.findById(id)
				.orElseThrow(()->new ItemNotFoundException(id));
	}
	
	@PutMapping("/campC/{id}")
	ResponseEntity<Camp>updateCamp(@RequestBody Camp camp, @PathVariable Integer id)
	{
		return crepo.findById(id)
	            .map(admin -> {
	                camp.setCid(camp.getCid());
	                camp.setLocation(camp.getLocation());
	                camp.setDate(camp.getDate());
	                camp.setTime(camp.getTime());
	                Camp updatedCamp = crepo.save(camp);
	                return ResponseEntity.ok(updatedCamp);
	            })
	            .orElse(ResponseEntity.notFound().build());				
	}
	
	@DeleteMapping("/campC/{id}")
	String deleteCamp(@PathVariable Integer id) {
	    if (!crepo.existsById(id)) { 
	        throw new ItemNotFoundException(id); 
	    }
	    
	    crepo.deleteById(id); // 
	    return "Item with id " + id + " has been deleted";
	}
}
