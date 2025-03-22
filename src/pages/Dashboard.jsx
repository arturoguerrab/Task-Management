import React from "react";
import { useSession } from "../SessionContext";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Dashboard = () => {
  const sesion = useSession();
  return (
    <div className="grid grid-cols-[repeat(auto-fill,16rem)] justify-evenly gap-3">
      {/*--------------------------------- TARJETA -------------------------------------- */}
      <div className="w-64 h-72 border-2 border-amber-500 rounded-3xl py-2.5 px-4">
        {/* zona 1 */}
        <div className="h-2/8 flex justify-between items-center ">
          <img
            className="rounded-full h-10"
            src="https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/b3/ad/98/b3ad98e3-340e-1af6-910a-2c8c3289374a/source/256x256bb.jpg"
            alt="unicenter icon"
          />
          <div className="bg-sky-200 p-1 flex gap-0.5 rounded-md font-semibold text-sm text-sky-900">
            <AddCircleIcon fontSize="medium" />{" "}
          </div>
        </div>
        {/* zona 2 */}
        <div className="h-3/8 flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Constanza Balbo</p>
          <h2 className="font-bold text-xl">Unicenter</h2>
          <div className="flex gap-2 text-sm font-semibold">
            <div className="bg-green-300 text-green-900 flex gap-0.5 p-1 rounded-md">
              <p>11/11</p>
              <PeopleAltIcon fontSize="small" />
            </div>
            <div className="bg-amber-200 text-amber-900 gap-0.5 flex p-1 rounded-md">
              <p>3 Licencias</p>
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
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
          </ol>
        </div>
      </div>
      {/*--------------------------------- TARJETA -------------------------------------- */}
      <div className="w-64 h-72 border-2 border-emerald-500 rounded-3xl py-2.5 px-4">
        {/* zona 1 */}
        <div className="h-2/8 flex justify-between items-center ">
          <img
            className="rounded-full h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6abWhbLFbC_jtauWsMleZ-B4gjC4YTbidKQ&s"
            alt="unicenter icon"
          />
          <div className="bg-sky-200 p-1 flex gap-0.5 rounded-md font-semibold text-sm text-sky-900">
            <AddCircleIcon fontSize="medium" />{" "}
          </div>
        </div>
        {/* zona 2 */}
        <div className="h-3/8 flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Cintia Andrada</p>
          <h2 className="font-bold text-xl">Paseo Alcorta</h2>
          <div className="flex gap-2 text-sm font-semibold">
            <div className="bg-green-300 text-green-900 flex gap-0.5 p-1 rounded-md">
              <p>11/11</p>
              <PeopleAltIcon fontSize="small" />
            </div>
            <div className="bg-green-300 text-green-900 gap-0.5 flex p-1 rounded-md">
              <p>0 Licencias</p>
              <CheckCircleIcon fontSize="small" />
            </div>
          </div>
        </div>
        {/* zona 3 */}
        <div className="h-3/8 flex flex-col">
          <Divider>
            <h3 className="font-semibold">Notas</h3>
          </Divider>
          <ol className="list-disc text-gray-600">
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
          </ol>
        </div>
      </div>
      {/*--------------------------------- TARJETA -------------------------------------- */}
      <div className="w-64 h-72 border-2 border-red-400 rounded-3xl py-2.5 px-4">
        {/* zona 1 */}
        <div className="h-2/8 flex justify-between items-center ">
          <img
            className="rounded-full h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBCHUhcgLS5bHWd58wCY4-VpRe5B6eeO9yA&s"
            alt="unicenter icon"
          />
          <div className="bg-sky-200 p-1 flex gap-0.5 rounded-md font-semibold text-sm text-sky-900">
            <AddCircleIcon fontSize="medium" />{" "}
          </div>
        </div>
        {/* zona 2 */}
        <div className="h-3/8 flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Cintia Andrada</p>
          <h2 className="font-bold text-xl">Casa Costanera CL</h2>
          <div className="flex gap-2 text-sm font-semibold">
            <div className="bg-red-300 text-red-900 flex gap-0.5 p-1 rounded-md">
              <p>9/11</p>
              <PeopleAltIcon fontSize="small" />
            </div>
            <div className="bg-green-300 text-green-900 gap-0.5 flex p-1 rounded-md">
              <p>0 Licencias</p>
              <CheckCircleIcon fontSize="small" />
            </div>
          </div>
        </div>
        {/* zona 3 */}
        <div className="h-3/8 flex flex-col">
          <Divider>
            <h3 className="font-semibold">Notas</h3>
          </Divider>
          <ol className="list-disc text-gray-600">
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
          </ol>
        </div>
      </div>
      {/*--------------------------------- TARJETA -------------------------------------- */}
      <div className="w-64 h-72 border-2 border-emerald-500 rounded-3xl py-2.5 px-4">
        {/* zona 1 */}
        <div className="h-2/8 flex justify-between items-center ">
          <img
            className="rounded-full h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cfcKvJL_AOXRmYMGwcPSQXUFNwAIaZi3hQ&s"
            alt="unicenter icon"
          />
          <div className="bg-sky-200 p-1 flex gap-0.5 rounded-md font-semibold text-sm text-sky-900">
            <AddCircleIcon fontSize="medium" />{" "}
          </div>
        </div>
        {/* zona 2 */}
        <div className="h-3/8 flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Constanza Balbo</p>
          <h2 className="font-bold text-xl">Galerias Pacifico</h2>
          <div className="flex gap-2 text-sm font-semibold">
            <div className="bg-green-300 text-green-900 flex gap-0.5 p-1 rounded-md">
              <p>11/11</p>
              <PeopleAltIcon fontSize="small" />
            </div>
            <div className="bg-green-300 text-green-900 gap-0.5 flex p-1 rounded-md">
              <p>0 Licencias</p>
              <CheckCircleIcon fontSize="small" />
            </div>
          </div>
        </div>
        {/* zona 3 */}
        <div className="h-3/8 flex flex-col">
          <Divider>
            <h3 className="font-semibold">Notas</h3>
          </Divider>
          <ol className="list-disc text-gray-600">
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
          </ol>
        </div>
      </div>
      {/*--------------------------------- TARJETA -------------------------------------- */}
      <div className="w-64 h-72 border-2 border-emerald-500 rounded-3xl py-2.5 px-4">
        {/* zona 1 */}
        <div className="h-2/8 flex justify-between items-center ">
          <img
            className="rounded-full h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfR9lbkViDsGa9n31fTiNXo80GDH2_wltiw&s"
            alt="unicenter icon"
          />
          <div className="bg-sky-200 p-1 flex gap-0.5 rounded-md font-semibold text-sm text-sky-900">
            <AddCircleIcon fontSize="medium" />{" "}
          </div>
        </div>
        {/* zona 2 */}
        <div className="h-3/8 flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Constanza Balbo</p>
          <h2 className="font-bold text-xl">Punta Carretas UY</h2>
          <div className="flex gap-2 text-sm font-semibold">
            <div className="bg-green-300 text-green-900 flex gap-0.5 p-1 rounded-md">
              <p>11/11</p>
              <PeopleAltIcon fontSize="small" />
            </div>
            <div className="bg-green-300 text-green-900 gap-0.5 flex p-1 rounded-md">
              <p>0 Licencias</p>
              <CheckCircleIcon fontSize="small" />
            </div>
          </div>
        </div>
        {/* zona 3 */}
        <div className="h-3/8 flex flex-col">
          <Divider>
            <h3 className="font-semibold">Notas</h3>
          </Divider>
          <ol className="list-disc text-gray-600">
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
            <li className="truncate">
              - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              atque?
            </li>
          </ol>
        </div>
      </div>

      {/* muestra */}

      {/* <div className="w-64 h-48 bg-lime-200 rounded-3xl">
        Hola {sesion.session.user.name}
      </div> */}
    </div>
  );
};

export default Dashboard;
