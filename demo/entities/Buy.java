package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Buy {

	@Id
	
	int sid;
	String blood_grp;
	int qty;
	@Column(name = "`desc`")
	String desc;
	public Buy() {
		super();
	}
	public Buy(int sid, String blood_grp, int qty, String desc) {
		super();
		this.sid = sid;
		this.blood_grp = blood_grp;
		this.qty = qty;
		this.desc = desc;
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
	
	
}
