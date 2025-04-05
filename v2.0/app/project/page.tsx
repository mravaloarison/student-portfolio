import React, { Suspense } from "react";
import ProjectPage from "@/components/project";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading project...</div>}>
			<ProjectPage />
		</Suspense>
	);
}
