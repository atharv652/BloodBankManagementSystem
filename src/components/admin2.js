import React, { useEffect, useState } from "react";
    import axios from "axios";
    import { Link, useNavigate, useParams } from "react-router-dom";

    export default function Admin2() {

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

        const [camp,setCamp]=useState([])
        const {cid}=useParams()
        // const parsedId = parseInt(id);

        useEffect(()=>{
            loadCamp();
        },[]);//if not given an array then it may run unlimited times

        const loadCamp=async ()=>{
            const result=await axios.get("http://localhost:8080/camp")
            setCamp(result.data);
        }

        const deleteCamp=async(cid)=>{
            // alert(cid)
            await axios.delete(`http://localhost:8080/campC/${cid}`)
            // alert("in delete")

                    loadCamp()
        }

        return (
            <div style={styles.container}>
                <h1 style={headingStyle}>Welcome Admin2</h1>
                <h2 style={styles.subHeading}>Camp Management</h2>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Location</th>
                            <th scope="col">Date</th>
                            <th scope="col">Starting Time</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            camp.map((camp,index)=>(
                                <tr>
                                <th scope="row" key={camp.cid}>{camp.cid}</th>
                                <td>{camp.location}</td>
                                <td>{camp.date}</td>
                                <td>{camp.time}</td>
                                
                                <td>
                                    {/* <button className="btn btn-primary mx-2">View</button> */}
                                    <Link className="btn btn-outline-primary mx-2" to={`/editcamp/${camp.cid}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2"
                                    onClick={()=>deleteCamp(camp.cid)}>Delete</button>
                                    {/* <Link className="btn btn-danger mx-2" to={`/adminC/${admin.sid}`}>Delete</Link> */}

                                </td>

                            </tr>
                            ))
                        }
                                                </tbody>

                        
                </table>
                <Link className='btn btn-outline-primary' to={"/admin"}>Manage Stock</Link>
                <Link className='btn btn-outline-primary' to={"/addcamp"}>Add Camps</Link>
                <Link to="logout" className='nav-link btn btn-outline-danger px-3'>Logout</Link>


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







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import AddCamp from "./AddCamp";

// export default function Admin2() {

//     // Navigate=useNavigate()
//     const tableStyle = {
//         borderCollapse: 'collapse',
//         width: '100%',
//         border: '1px solid black',
//         marginTop: '20px',
//     };

//     const cellStyle = {
//         border: '1px solid black',
//         padding: '8px',
//         textAlign: 'center',
//     };

//     const headingStyle = {
//         fontSize: '24px',
//         marginBottom: '10px',
//     };

//     const [camp,setCamp]=useState([])
//     const {cid}=useParams()
//     // const parsedId = parseInt(id);

//     useEffect(()=>{
//         loadCamp();
//     },[]);//if not given an array then it may run unlimited times

//     const loadCamp=async ()=>{
//         const result=await axios.get("http://localhost:8080/camp")
//         setCamp(result.data);
//     }

//     const deleteCamp=async(cid)=>{
//         alert(cid)
//         await axios.delete(`http://localhost:8080/campC/${cid}`)
//         alert("in delete")

//                 loadCamp()
//     }

//     return (
//         <div style={styles.container}>
//             <h1 style={headingStyle}>Welcome Admin2</h1>
//             <h2 style={styles.subHeading}>Camp Management</h2>
            
//             <table className="table border shadow">
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Location</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Time</th>
//                         <th scope="col">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         camp.map((camp,index)=>(
//                             <tr>
//                             <th scope="row" key={camp.cid}>{camp.cid}</th>
//                             <td>{camp.location}</td>
//                             <td>{camp.date}</td>
//                             <td>{camp.time}</td>
                            
//                             <td>
//                                 {/* <button className="btn btn-primary mx-2">View</button> */}
//                                 <Link className="btn btn-outline-primary mx-2" to={`/editcamp/${camp.cid}`}>Edit</Link>
//                                 <button className="btn btn-danger mx-2"
//                                 onClick={()=>deleteCamp(camp.cid)}>Delete</button>
                                

//                             </td>
//                             <td>
//                             </td>
                            

//                         </tr>
//                         ))
//                     }
//                                             </tbody>

                    
//             </table>
            

//         </div>
//     );
// }

// const styles = {
//     container: {
//         textAlign: 'center',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//         maxWidth: '800px',
//         margin: '0 auto',
//     },
//     subHeading: {
//         fontSize: '20px',
//         marginBottom: '20px',
//     },
// };