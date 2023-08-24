import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Admin() {

    // Navigate=useNavigate()
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        border: '1px solid black',
        marginTop: '20px',
    };

    const cellStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '24px',
        marginBottom: '10px',
    };

    const [admin,setAdmin]=useState([])
    const {sid}=useParams()
    // const parsedId = parseInt(id);

    useEffect(()=>{
        loadAdmins();
    },[]);//if not given an array then it may run unlimited times

    const loadAdmins=async ()=>{
        const result=await axios.get("http://localhost:8080/stock")
        setAdmin(result.data);
    }

    const deleteStock=async(sid)=>{
        alert(sid)
        await axios.delete(`http://localhost:8080/adminC/${sid}`)
        alert("in delete")

                loadAdmins()
    }

    return (
        <div style={styles.container}>
            <h1 style={headingStyle}>Welcome Admin</h1>
            <h2 style={styles.subHeading}>Stock Management</h2>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">quantity</th>
                        <th scope="col">description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admin.map((admin,index)=>(
                            <tr>
                            <th scope="row" key={admin.sid}>{admin.sid}</th>
                            <td>{admin.blood_grp}</td>
                            <td>{admin.qty}</td>
                            <td>{admin.desc}</td>
                            
                            <td>
                                {/* <button className="btn btn-primary mx-2">View</button> */}
                                <Link className="btn btn-outline-primary mx-2" to={`/editstock/${admin.sid}`}>Edit</Link>
                                <button className="btn btn-danger mx-2"
                                onClick={()=>deleteStock(admin.sid)}>Delete</button>
                                {/* <Link className="btn btn-danger mx-2" to={`/adminC/${admin.sid}`}>Delete</Link> */}

                            </td>

                        </tr>
                        ))
                    }
                                            </tbody>

                    
            </table>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
    },
    subHeading: {
        fontSize: '20px',
        marginBottom: '20px',
    },
};
