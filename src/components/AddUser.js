import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddUser(){

    let navigate=useNavigate();

    const [stock,setStock]=useState({
        blood_grp : "",
        qty : "",
        desc : ""
    })

    const{blood_grp,qty,desc}=stock

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setStock({
          ...stock,
          [name]: value,
        });
      };

      const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/adminC",stock)
        navigate("/admin")
      }
      

    return <div>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Add to Stock</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="blood_grp" className="form-label">
                        Blood Group
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter blood group"
                    name="blood_grp"
                    value={blood_grp}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="qty" className="form-label">
                        Quantity
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Quantity(in bags)"
                    name="qty"
                    value={qty}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Description"
                    name="desc"
                    value={desc}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Save</button>
                <Link  className="btn btn-danger mx-2" to="/admin">Cancel</Link>
                </form>
            </div>

        </div>
    </div>
}