import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Outlet, Navigate, useLocation } from "react-router";
import { useSession } from "../SessionContext";

const Layout = () => {
	const { session, loading } = useSession();
	const location = useLocation();

	if (loading) {
		return (
			<div style={{ width: "100%" }}>
				<LinearProgress />
			</div>
		);
	}

	if (!session) {
		// Add the `callbackUrl` search parameter
		const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`;

		return <Navigate to={redirectTo} replace />;
	}

	return (
		<DashboardLayout>
			<PageContainer>
				<Outlet />
			</PageContainer>
		</DashboardLayout>
	);
};

export default Layout;
