"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
	useGSAP(() => {
		gsap.fromTo(
			".main",
			{ x: 10, opacity: 0 },
			{ x: 0, duration: 0.2, opacity: 1 }
		);
	});

	function goBack() {
		gsap.to(".main", {
			x: -10,
			duration: 0.2,
			opacity: 0,
		});

		setTimeout(() => {
			window.location.href = "/";
		}, 200);
	}

	return (
		<div className="w-screen h-screen main opacity-0 bg-white overflow-y-scroll">
			<div className="p-8 md:p-12 max-w-7xl w-full mx-auto text-xl md:text-2xl font-semibold text-gray-500">
				<button
					onClick={goBack}
					className="text-indigo-400 flex gap-2 items-center text-xl md:text-2xl font-semibold hover:cursor-pointer"
				>
					<ArrowLeft />
					Go back
				</button>

				<p className="intro pt-6 md:pt-10">
					My name is Rava. I recently graduated with a major in{" "}
					<span className="text-black font-bold">
						Computer Information Systems
					</span>{" "}
					and a minor in{" "}
					<span className="text-black font-bold">Mathematics</span>.
					I&apos;m originally from{" "}
					<span className="text-black hover:underline">
						<Link
							href="https://en.wikipedia.org/wiki/Madagascar"
							target="_blank"
						>
							Madagascar
						</Link>
					</span>{" "}
					where I started with no coding background and where English
					wasn&apos;t even my second language. I taught myself both{" "}
					<span className="text-black font-bold">English</span> and{" "}
					<span className="text-black font-bold">programming</span>. I
					wasn&apos;t born into tech, I pursued it out of curiosity
					and determination.
				</p>

				<p className="pt-8 md:pt-12 intro">
					As an international undergrad studying in the U.S., I faced
					difficulties landing internships due to{" "}
					<span className="text-black font-bold">
						visa and hiring restrictions
					</span>
					. But rather than let that slow me down, I turned to{" "}
					<span className="text-black font-bold">hackathons</span> to
					get real-world experience and grow.
				</p>
				<p className="pt-6 intro">
					Through{" "}
					<span className="text-black hover:underline">
						<Link
							href="https://devpost.com/mrava?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
							target="_blank"
						>
							10 hackathon wins
						</Link>
					</span>
					, I&apos;ve earned over{" "}
					<span className="text-black font-bold">$9,000</span> in
					prize money.
				</p>

				<div className="pt-6 pb-10">
					<img
						src="/images/story2.jpg"
						alt="Hackathon win photo"
						className="w-full h-full object-cover border border-gray-300 rounded-2xl"
					/>
				</div>

				<p className="pt-8 md:pt-12 intro">
					What I value most about the{" "}
					<span className="text-black font-bold">
						hacker community
					</span>{" "}
					is being surrounded by people with similar energy, passions,
					and ambitions.
				</p>
				<p className="pt-6 intro">
					To me, hackathons are a space where everyone is focused on{" "}
					<span className="text-black">learning</span>,{" "}
					<span className="text-black">building</span>, and{" "}
					<span className="text-black">
						solving real-world problems
					</span>
					. Plus, I&apos;ve picked up tons of swag and had travel
					expenses covered for some events.
				</p>

				<p className="pt-8 md:pt-12 intro">
					Throughout this journey, I&apos;ve built amazing
					connections. It&apos;s exciting to know that someday,
					I&apos;ll be able to say I have{" "}
					<span className="text-black font-bold">
						friends from all over the world
					</span>
					.
				</p>

				<div className="pt-6 pb-12">
					<img
						src="/images/story4.jpg"
						alt="Friends photo"
						className="w-full h-full object-cover border border-gray-300 rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
}
