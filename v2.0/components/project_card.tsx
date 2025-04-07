import { technologies } from "@/app/fakedb";
import ImageCarousel from "./csls";
import { Link2 } from "lucide-react";
import gsap from "gsap";

interface Technology {
	name: string;
	icon: string;
}

export default function ProjectCard({
	title,
	description,
	year,
	ts,
	screenshots,
	githubLink,
}: {
	title: string;
	description: string;
	year: string;
	ts: string[];
	screenshots: string[];
	githubLink: string;
}) {
	const newTechnologies = (): Technology[] => {
		return technologies.filter((tech) => ts.includes(tech.name));
	};

	function goToAProject(githubLink: string) {
		gsap.to(".main", { x: 0.2, duration: 0.2, opacity: 0 });
		setTimeout(() => {
			window.location.href = `/project?repo=${githubLink}`;
		}, 200);
	}

	return (
		<div className="flex flex-col gap-6">
			<div>
				<ImageCarousel
					pictureLinks={screenshots}
					pictureAlts={screenshots}
					autoPlay={false}
					interval={5000}
				/>
			</div>

			<div className="flex flex-col gap-4">
				<button
					onClick={() => goToAProject(githubLink)}
					className="flex items-center gap-2 group"
				>
					<h1 className="text-2xl font-semibold text-black group-hover:underline">
						{title}
					</h1>
					<Link2 className="text-black" />
				</button>

				<p className="text-lg text-gray-500 font-medium leading-snug truncate">
					{description}
				</p>

				<div className="flex flex-wrap gap-2">
					{newTechnologies().map((tech) => (
						<div
							key={tech.name}
							className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 bg-white shadow-sm"
						>
							<div className="w-6 overflow-hidden h-6">
								<img
									src={tech.icon}
									alt={tech.name}
									className="h-5 object-cover"
								/>
							</div>
							<span className="text-sm font-semibold text-gray-600">
								{tech.name}
							</span>
						</div>
					))}
				</div>

				<div className="text-sm text-gray-700 font-semibold">
					{year}
				</div>
			</div>
		</div>
	);
}
