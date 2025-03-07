import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";

import * as React from "react";
import {
	firebaseSignOut,
	signInWithGoogle,
	onAuthStateChanged,
} from "./firebase/auth";
import SessionContext from "./SessionContext";

const NAVIGATION = [
	{
		kind: "header",
		title: "Main items",
	},
	{
		title: "Dashboard",
		icon: <DashboardIcon />,
	},
	{
		segment: "stores",
		title: "Stores",
		icon: <ShoppingCartIcon />,
	},
];

const BRANDING = {
	title: "Task Manager",
	logo: <img className="w-24 pt-1.5 " src="https://images.weare365.io/filters:format(.webp)/1920x0/store_Logo_6121_cebd1ecf70.png" alt="MUI logo" />
};

const AUTHENTICATION = {
	signIn: signInWithGoogle,
	signOut: firebaseSignOut,
};

function App() {
	const [session, setSession] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	const sessionContextValue = React.useMemo(
		() => ({
			session,
			setSession,
			loading,
		}),
		[session, loading]
	);

	React.useEffect(() => {
		// Returns an `unsubscribe` function to be called during teardown
		const unsubscribe = onAuthStateChanged((user) => {
			if (user) {
				setSession({
					user: {
						name: user.displayName || "",
						email: user.email || "",
						image: user.photoURL || "",
					},
				});
			} else {
				setSession(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<ReactRouterAppProvider
			navigation={NAVIGATION}
			branding={BRANDING}
			session={session}
			authentication={AUTHENTICATION}
		>
			<SessionContext.Provider value={sessionContextValue}>
				<Outlet />
			</SessionContext.Provider>
		</ReactRouterAppProvider>
	);
}

export default App;
