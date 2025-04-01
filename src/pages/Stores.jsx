import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Stores = () => {
  const [store, setStore] = useState({});
  const [staff, setStaff] = useState([]);
  const params = useParams();
  const storeCollection = doc(db, "stores", `${params.storeId}`);
  const staffCollection = collection(db, "staff");

  const getInfo = async () => {
    const data = await getDoc(storeCollection);
    const staffData = await getDocs(
      query(staffCollection, where("storeID", "==", params.storeId))
    );
    setStore(data.data());
    setStaff(staffData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getInfo();
  }, []);

  console.log(staff);
  return (
    <div>
      <div>
        <h1>{store.name}</h1>
        <img src={store.image} alt="" />
        <p>{store.idealStaff}</p>
      </div>
      <div>
        {staff.map((personal) => {
          return (
            <div key={personal.id} className="flex gap-2 ">
              <div>{personal.name}</div>
              <div>{personal.position}</div>
              <div>{personal.state}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stores;
