import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";

import * as React from "react";
import {
  firebaseSignOut,
  signInWithGoogle,
  onAuthStateChanged,
} from "./firebase/auth";
import SessionContext from "./SessionContext";
import { createTheme } from "@mui/material";
import DataContextProvider from "./DataContextProvider";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Locales",
    icon: <HomeIcon />,
    
  },
  {
    segment: "staff",
    title: "Equipo",
    icon: <GroupsIcon />,
    
  },
  {
    segment: "notes",
    title: "Notas",
    icon: <FormatListBulletedIcon />,
    
  },
  // {
  //   segment: "store",
  //   title: "store",
  //   icon: <ShoppingCartIcon />,
  // },
];

const BRANDING = {
  title: "",
  logo: (
    <img
      className="w-24 pt-1.5 "
      src="https://images.weare365.io/filters:format(.webp)/1920x0/store_Logo_6121_cebd1ecf70.png"
      alt="MUI logo"
    />
  ),
};

const demoTheme = createTheme({
  colorSchemes: { dark: false },
  typography: { fontFamily: ["Lato"] },
});

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
      theme={demoTheme}
    >
      <SessionContext.Provider value={sessionContextValue}>
        <DataContextProvider>
          <Outlet/>
        </DataContextProvider>
      </SessionContext.Provider>
    </ReactRouterAppProvider>
  );
}

export default App;
