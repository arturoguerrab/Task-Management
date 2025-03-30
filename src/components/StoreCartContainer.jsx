import React, { useEffect, useState } from "react";
import StoreCart from "./StoreCart";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const StoreCartContainer = () => {
  const [stores, setStores] = useState([]);
  const storesCollection = collection(db, "stores")

  const getStores = async ()=>{
    const data = await getDocs(storesCollection)
    setStores(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    
  }

  useEffect(() => {
    
    getStores()

  }, []);

  const props = { stores };
  return <StoreCart props={props} />;
};

export default StoreCartContainer;
