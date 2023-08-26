package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Buy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int sid;
	String blood_grp;
	int qty;
	@Column(name = "`desc`")
	String desc;
	double price;
	
	public Buy() {
		super();
	}
	
	public Buy(int sid, String blood_grp, int qty, String desc, double price) {
		super();
		this.sid = sid;
		this.blood_grp = blood_grp;
		this.qty = qty;
		this.desc = desc;
		this.price = price;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getBlood_grp() {
		return blood_grp;
	}

	public void setBlood_grp(String blood_grp) {
		this.blood_grp = blood_grp;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
}
