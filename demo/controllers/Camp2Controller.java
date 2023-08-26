package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Camp2;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.repositories.Camp2Repository;

@RestController
//@RequestMapping("/camps2")
@CrossOrigin(origins = "http://localhost:3000")
public class Camp2Controller {
    @Autowired
    private Camp2Repository campRepository;

    @GetMapping("/donorcamps")
    @ResponseBody
    public List<Camp2> getAllCamps() {
        return campRepository.findAll();
    }

//    @GetMapping("/donorcamps/{id}")
//   ResponseEntity<Camp2> getCampById(@PathVariable Integer id) {
//        Optional<Camp2> camp = campRepository.findById(id);
//        if (camp.isPresent()) {
//            return ResponseEntity.ok(camp.get());
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
    
    @GetMapping("/booking/{id}")
    Camp2 getCamp2ById(@PathVariable Integer id) {
    	return campRepository.findById(id)
    			.orElseThrow(()->new ItemNotFoundException(id));
    }
}
