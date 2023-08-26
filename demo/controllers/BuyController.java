package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.entities.Buy;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.repositories.BuyRepository;

@Controller
@CrossOrigin("http://localhost:3000")
public class BuyController {
	
	@Autowired
	private BuyRepository brepo;

	@GetMapping("/buy")
	@ResponseBody
	List<Buy>getAllStock(){
		return brepo.findAll();
		
	}
	@GetMapping("/item/{sid}")
	@ResponseBody
	Buy getBuyById(@PathVariable Integer sid) {
		return brepo.findById(sid)
		.orElseThrow(()-> new ItemNotFoundException(sid));
				
	}
}