package com.cpr.technotogether.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.entity.TransactionEntity;
import com.cpr.technotogether.repository.StudentRepository;
import com.cpr.technotogether.repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Autowired
	private TransactionRepository trepo;
	
	@Autowired
	private StudentRepository srepo;
	
	public TransactionService(TransactionRepository trepo, StudentRepository srepo) {
		this.trepo = trepo;
		this.srepo = srepo;
	}
	
	@SuppressWarnings("finally")
	public TransactionEntity postTransaction(TransactionEntity transaction, String tutor, String student) throws Exception{
		try {
			StudentEntity student1 = new StudentEntity();
			StudentEntity tutor1 = new StudentEntity();
			student1 = srepo.findByUsername(student);
			tutor1 = srepo.findByUsername(tutor);
			transaction.setTutor(tutor1);
			transaction.setStudent(student1);
		}catch(NoSuchElementException e) {
			throw new Exception("username does not exist");
		}finally {
			return trepo.save(transaction);
		}

	
	}
	
	public List<TransactionEntity> getAllTransactions(){
		return trepo.findAll();
	}
	public TransactionEntity getTransactionById(int id) {
		return trepo.findById(id).get();
	}
//	public TransactionEntity getTransactionByTutorUsername(String username) {
		//return trepo.findByTutorusername(username);
//	}
	
	@SuppressWarnings("finally")
	public TransactionEntity updateTransaction(int id,TransactionEntity newTransaction) throws Exception{
		TransactionEntity transaction = new TransactionEntity();
		try {
		
			transaction = trepo.findById(id).get();
			transaction.setPayment(newTransaction.getPayment());
			transaction.setPaymentmethod(newTransaction.getPaymentmethod());
			transaction.setTransactiondate(newTransaction.getTransactiondate());
			transaction.setTutoringduration(newTransaction.getTutoringduration());
		
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + "does not exist");
		}finally {
			return trepo.save(transaction);
		}
	}
	
	public String deleteTransaction(int id) {
		String msg;
		
		if(trepo.findById(id) != null) {	
			trepo.deleteById(id); 		
			
			msg = "Transaction ID Number " + id + " is successfully deleted";
		}
		else {
			msg = "Transaction ID Number " + id + " is NOT FOUND";

		}
		
		return msg;
	}
	
}
