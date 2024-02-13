import { Outlet } from '@remix-run/react';
import SideBar from '~/components/SideBar';

export default function DashboardLayout() {
	return (
		<div>
			<div className="">
				<div className="">
					<SideBar />
				</div>
				<div className="">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
