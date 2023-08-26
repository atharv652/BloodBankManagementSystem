package com.example.demo.entities;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="camps")
public class Camp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cid;
	String location;
	Date date;
	Time time;
	
	public Camp() {
		// TODO Auto-generated constructor stub
	}

	public Camp(int cid, String location, Date date,Time time) {
		super();
		this.cid = cid;
		this.location = location;
		this.date = date;
		this.time = time;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}
	
	
	
}
