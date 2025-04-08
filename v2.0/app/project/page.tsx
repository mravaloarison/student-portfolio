import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProjectPage = dynamic(() => import("@/components/project"), {
	ssr: false,
});

export default function Page() {
	return (
		<Suspense fallback={<div>Loading project...</div>}>
			<ProjectPage />
		</Suspense>
	);
}
