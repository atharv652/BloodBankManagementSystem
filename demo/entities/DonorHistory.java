package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "donor_history")
public class DonorHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hid;
    private int did; 
    private int cid; 
    private Date donorDate;
	public DonorHistory() {
		super();
	}
	public DonorHistory(int hid, int did, int cid, Date donorDate) {
		super();
		this.hid = hid;
		this.did = did;
		this.cid = cid;
		this.donorDate = donorDate;
	}
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public Date getDonorDate() {
		return donorDate;
	}
	public void setDonorDate(Date donorDate) {
		this.donorDate = donorDate;
	}
    
    
}
