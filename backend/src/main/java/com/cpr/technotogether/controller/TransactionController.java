package com.cpr.technotogether.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	 @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/postTransaction")
	public TransactionEntity postTransaction(@RequestParam()String student, String tutor,@RequestBody()TransactionEntity transaction) throws Exception {
		return tserv.postTransaction(transaction,tutor,student);
	}
	@GetMapping("/getAllTransaction")
	public List<TransactionEntity> getAllTransactions(){
		return tserv.getAllTransactions();
	}
	@GetMapping("/getTransaction")
	public TransactionEntity getTransactionById(@RequestParam()int id) {
		return tserv.getTransactionById(id);
	}
/*	@GetMapping("/getTransactionByTutorUsername")
	public TransactionEntity getTransactionByTutor(@RequestParam()String username) {
		return tserv.getTransactionByTutorUsername(username);
	}
	*/
	@PutMapping("/updateTransaction")
	public TransactionEntity updateTransaction(@RequestParam()int id, @RequestBody()TransactionEntity transaction) throws Exception {
		return tserv.updateTransaction(id, transaction);
	}
	
	@DeleteMapping("/deleteTransaction/{id}")
	public String deleteTransaction(@PathVariable( )int id) {
		return tserv.deleteTransaction(id);
	}
}