package com.cpr.technotogether.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpr.technotogether.entity.TransactionEntity;
import com.cpr.technotogether.service.TransactionService;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
	
	@Autowired
	private TransactionService tserv;
	
	public TransactionController(TransactionService tserv) {
		this.tserv = tserv;
	}
	
	@PostMapping("/postTransaction")
	public TransactionEntity postTransaction(@RequestBody()TransactionEntity transaction) {
		return tserv.postTransaction(transaction);
	}
	@GetMapping("/getAllTransaction")
	public List<TransactionEntity> getAllTransactions(){
		return tserv.getAllTransactions();
	}
}
