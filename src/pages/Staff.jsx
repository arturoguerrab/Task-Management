import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig';

const Staff = () => {
    const [staff, setStaff] = useState([]);
      const staffCollection = collection(db, "staff")
    
      const getStaff = async ()=>{
        const data = await getDocs(staffCollection)
        setStaff(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        
      }
      console.log(staff);
    
      useEffect(() => {
        
        getStaff()
    
      }, []);
  return (
    staff.map((personal) => {
        return (
          <div key={personal.id} className="flex gap-2 ">
            <div>{personal.name}</div>
            <div>{personal.position}</div>
            <div>{personal.state}</div>
          </div>
        );
      })
  )
}

export default Staff