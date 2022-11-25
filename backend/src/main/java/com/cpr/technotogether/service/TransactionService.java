package com.cpr.technotogether.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpr.technotogether.entity.TransactionEntity;
import com.cpr.technotogether.repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Autowired
	private TransactionRepository trepo;
	
	public TransactionService(TransactionRepository trepo) {
		this.trepo = trepo;
	}
	
	public TransactionEntity postTransaction(TransactionEntity transaction) {
		return trepo.save(transaction);
	}
	
	public List<TransactionEntity> getAllTransactions(){
		return trepo.findAll();
	}
}
