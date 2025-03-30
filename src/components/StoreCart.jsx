import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NavLink } from "react-router";

const StoreCart = ({ props }) => {
  console.log(props.stores);
  return (
    <>
      {props.stores.map((store) => {
        return (
          <div
            className="w-64 h-72 border-2 border-amber-500 rounded-3xl py-2.5 px-4"
            key={store.id}
          >
            <NavLink to={'/store/' + store.id} end>
              Home
            </NavLink>
            {/* zona 1 */}
            <div className="h-2/8 flex justify-between items-center ">
              <img
                className="rounded-full h-10"
                src={store.image}
                alt={store.name + " icon"}
              />
              <div className="bg-sky-200 p-1 flex gap-0.5 rounded-md font-semibold text-sm text-sky-900">
                <AddCircleIcon fontSize="medium" />{" "}
              </div>
            </div>
            {/* zona 2 */}
            <div className="h-3/8 flex flex-col gap-1 ">
              <p className="text-sm text-gray-600">{store.supervisor}</p>
              <h2 className="font-bold text-xl">{store.name}</h2>
              <div className="flex gap-2 text-sm font-semibold">
                <div className="bg-green-300 text-green-900 flex gap-0.5 p-1 rounded-md">
                  <p>{2 + "/" + store.idealStaff}</p>
                  <PeopleAltIcon fontSize="small" />
                </div>
                <div className="bg-amber-200 text-amber-900 gap-0.5 flex p-1 rounded-md">
                  <p>{store.license + " Licencias"}</p>
                  <ErrorIcon fontSize="small" />
                </div>
              </div>
            </div>
            {/* zona 3 */}
            <div className="h-3/8 flex flex-col">
              <Divider>
                <h3 className="font-semibold">Notas</h3>
              </Divider>
              <ol className="list-disc text-gray-600">
                <li className="truncate">hola</li>
              </ol>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StoreCart;
