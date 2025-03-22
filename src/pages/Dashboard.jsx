import React from "react";
import { useSession } from "../SessionContext";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const Dashboard = () => {
	const sesion = useSession();
	return (
		<div className="grid grid-cols-[repeat(auto-fill,16rem)] justify-evenly gap-3">
			<div className="w-64 h-48 border-2 rounded-3xl">
				<div className="h-1/3 flex justify-around items-center">
        <div>UNICENTER</div>
					<div className=" w-10 h-10 flex justify-center items-center place-self-start -me-7 -mt-4 rounded-full bg-green-600 text-white font-bold text-lg">9</div>
				</div>
				<div className="h-1/3 bg-amber-200"></div>
				<div className="h-1/3 bg-amber-200"></div>
			</div>

			{/* muestra */}
			<div className="w-64 h-48 bg-amber-200 rounded-3xl">
				Hola {sesion.session.user.name}
			</div>
			<div className="w-64 h-48 bg-lime-200 rounded-3xl">
				Hola {sesion.session.user.name}
			</div>
			<div className="w-64 h-48 bg-blue-400 rounded-3xl">
				Hola {sesion.session.user.name}
			</div>
			<div className="w-64 h-48 bg-amber-200 rounded-3xl">
				Hola {sesion.session.user.name}
			</div>
			<div className="w-64 h-48 bg-lime-200 rounded-3xl">
				Hola {sesion.session.user.name}
			</div>
			<div className="w-64 h-48 bg-lime-200 rounded-3xl">
				Hola {sesion.session.user.name}
			</div>
		</div>
	);
};

export default Dashboard;
