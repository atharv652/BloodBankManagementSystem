import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddCamp(){

    let navigate=useNavigate();

    const [camp,setCamp]=useState({
        location : "",
        date : "",
        time : ""
    })

    const{location,date,time}=camp

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCamp({
          ...camp,
          [name]: value,
        });
      };

      const onSubmit=async (e)=>{
        e.preventDefault();
        // alert("HAGFgh")

        await axios.post("http://localhost:8080/campC",camp)
        navigate("/admin2")
      }
      

    return <div>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Add Camp</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                        Location
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter location"
                    name="location"
                    value={location}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date
                    </label>
                    <input
                    type={"date"}
                    className="form-control"
                    placeholder="Enter Date"
                    name="date"
                    value={date}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">
                        Camp Starts at(Time)
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Time"
                    name="time"
                    value={time}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Save</button>
                <Link  className="btn btn-danger mx-2" to="/admin2">Cancel</Link>
                </form>
            </div>

        </div>
    </div>
}