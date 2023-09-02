package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="donors")
public class Donor {
	@Id
	@GeneratedValue
	int did;
	
	@JoinColumn(name="id")
	int id2;
	String blood_grp;
	
	public Donor() {
		super();
	}

	public Donor(int did, int id2, String blood_grp) {
		super();
		this.did = did;
		this.id2 = id2;
		this.blood_grp = blood_grp;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public int getId2() {
		return id2;
	}

	public void setId2(int id2) {
		this.id2 = id2;
	}

	public String getBlood_grp() {
		return blood_grp;
	}

	public void setBlood_grp(String blood_grp) {
		this.blood_grp = blood_grp;
	}
	
	
}
