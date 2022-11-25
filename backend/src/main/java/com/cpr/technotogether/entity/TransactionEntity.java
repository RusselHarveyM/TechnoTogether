package com.cpr.technotogether.entity;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_transaction")
public class TransactionEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date transactiondate;
	private int tutoringduration;
	private int payment;
	private String paymentmethod;
	
	@ManyToOne
	@JoinColumn(name = "tutor_username")
	StudentEntity tutor;
	
	@ManyToOne
	@JoinColumn(name = "student_username")
	StudentEntity student;

	public TransactionEntity(int id, Date transactiondate, int tutoringduration, int payment, String paymentmethod,
			StudentEntity tutor, StudentEntity student) {
		super();
		this.id = id;
		this.transactiondate = transactiondate;
		this.tutoringduration = tutoringduration;
		this.payment = payment;
		this.paymentmethod = paymentmethod;
		this.tutor = tutor;
		this.student = student;
	}

	@Override
	public String toString() {
		return "TransactionEntity [id=" + id + ", transactiondate=" + transactiondate + ", tutoringduration="
				+ tutoringduration + ", payment=" + payment + ", paymentmethod=" + paymentmethod + ", tutor=" + tutor
				+ ", student=" + student + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getTransactiondate() {
		return transactiondate;
	}

	public void setTransactiondate(Date transactiondate) {
		this.transactiondate = transactiondate;
	}

	public int getTutoringduration() {
		return tutoringduration;
	}

	public void setTutoringduration(int tutoringduration) {
		this.tutoringduration = tutoringduration;
	}

	public int getPayment() {
		return payment;
	}

	public void setPayment(int payment) {
		this.payment = payment;
	}

	public String getPaymentmethod() {
		return paymentmethod;
	}

	public void setPaymentmethod(String paymentmethod) {
		this.paymentmethod = paymentmethod;
	}

	public StudentEntity getTutor() {
		return tutor;
	}

	public void setTutor(StudentEntity tutor) {
		this.tutor = tutor;
	}

	public StudentEntity getStudent() {
		return student;
	}

	public void setStudent(StudentEntity student) {
		this.student = student;
	}


	
	
	
	
}
