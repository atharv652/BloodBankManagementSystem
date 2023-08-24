package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")

public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "sid")
	private int sid;
	 @Column(name = "blood_grp")
	private String blood_grp;
	private int qty;
	@Column(name = "`desc`")
	private String desc;
//	private Date expiry_date;
	public Admin() {
		super();
	}
	public Admin(int sid, String blood_grp, int qty, String desc) {
		super();
		this.sid = sid;
		this.blood_grp = blood_grp;
		this.qty = qty;
		this.desc = desc;
//		this.expiry_date = expiry_date;
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
//	public Date getExpiry_date() {
//		return expiry_date;
//	}
//	public void setExpiry_date(Date expiry_date) {
//		this.expiry_date = expiry_date;
//	}
//	
	
	
}
