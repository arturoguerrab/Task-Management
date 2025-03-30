import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const AddStore = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [storeInfo, setStoreInfo] = useState({
    name: "",
    license: 0,
    idealStaff: 0,
    image: "",
    supervisor: "",
    supervisorID: "",
    createDate: serverTimestamp(),
  });

  const storesCollection = collection(db, "stores");

  const addStore = async (e) => {
    e.preventDefault();
    await addDoc(storesCollection, storeInfo );
    handleClose();
  };

  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({ name: doc.data().name, id: doc.id })));
  };
  console.log(storeInfo);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Agregar Sede</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {users == "" ? (
            <p>espera</p>
          ) : (
            <form
              onSubmit={addStore}
              className="grid grid-rows-5 justify-items-center h-[500px] w-3/4"
            >
              <TextField
                required
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                onChange={(content) =>
                  setStoreInfo({ ...storeInfo, name: content.target.value })
                }
              />
              <TextField
                required
                id="outlined-basic"
                label="Imagen URL"
                variant="outlined"
                type="url"
                onChange={(content) =>
                  setStoreInfo({ ...storeInfo, image: content.target.value })
                }
              />
              <TextField
                required
                id="outlined-basic"
                label="Staff"
                variant="outlined"
                type="number"
                onChange={(content) =>
                  setStoreInfo({
                    ...storeInfo,
                    idealStaff: content.target.value,
                  })
                }
              />
              <TextField
                required
                id="outlined-basic"
                select
                label="Selecciona"
                variant="outlined"
                defaultValue=""
                onChange={(content) =>
                  setStoreInfo({
                    ...storeInfo,
                    supervisor: content.target.value.name,
                    supervisorID: content.target.value.id,
                  })
                }
              >
                {users.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <button className="row-span-1 w-[150px] self-center bg-gray-900 text-white hover:text-[#e427ab]">
                Crear
              </button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AddStore;
