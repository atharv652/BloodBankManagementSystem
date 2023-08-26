package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Buy;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.repositories.BuyRepository;

@Controller
//@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private BuyRepository brepo;

    @GetMapping("/confirm-payment/{sid}")
    public void confirmPayment(@RequestParam Integer sid) {
        Buy stockItem = brepo.findById(sid)
            .orElseThrow(() -> new ItemNotFoundException(sid));

        // Deduct the quantity from the stock
        
        int newQty = stockItem.getQty() - 1; 
        stockItem.setQty(newQty);
        brepo.save(stockItem);
    }
}
