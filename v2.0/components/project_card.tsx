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
	const newTechnologies = () => {
		const techs: Technology[] = [];
		technologies.map((tech) => {
			ts.map((t) => {
				if (t === tech.name) {
					techs.push(tech);
				}
			});
		});

		return techs;
	};

	function goToAProject(githubLink: string) {
		gsap.to(".main", { x: 0.2, duration: 0.2, opacity: 0 });

		setTimeout(() => {
			window.location.href = `/project?repo=${githubLink}`;
		}, 200);
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="">
				<ImageCarousel
					pictureLinks={screenshots}
					pictureAlts={screenshots}
					autoPlay={false}
					interval={5000}
				/>
			</div>
			<div className="flex flex-col gap-4 ">
				<button
					onClick={() => goToAProject(githubLink)}
					className="flex items-center gap-2"
				>
					<h1 className="text-2xl font-semibold hover:cursor-pointer text-black">
						{title}
					</h1>
					<Link2 className="text-black" />
				</button>
				<p className="text-lg font-semibold text-gray-500 overflow-hidden truncate">
					{description}
				</p>

				<div className="flex flex-wrap gap-2">
					{newTechnologies().map((tech) => (
						<div
							key={tech.name}
							className="flex items-center gap-2 border border-gray-200 rounded-full px-2 py-1"
						>
							<div className="w-6 overflow-hidden h-6">
								<img
									src={tech.icon}
									alt={tech.name}
									className="h-6 object-cover"
								/>
							</div>
							<span className="text-sm font-semibold text-gray-500">
								{tech.name}
							</span>
						</div>
					))}
				</div>
				<div className="font-semibold text-sm text-black">{year}</div>
			</div>
		</div>
	);
}
