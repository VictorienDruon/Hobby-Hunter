"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Settings = () => {
	return (
		<div className="flex justify-end gap-4">
			<Button
				variant="outline"
				size="sm"
				onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
				className="border-destructive text-xs text-destructive hover:bg-destructive/5 hover:text-destructive dark:hover:bg-destructive/25 md:p-5 lg:text-sm"
			>
				Sign Out
			</Button>
			<Button
				variant="destructive"
				size="sm"
				className="text-xs md:p-5 lg:text-sm"
			>
				Delete Account
			</Button>
		</div>
	);
};

export default Settings;
