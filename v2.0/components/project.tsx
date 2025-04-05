"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github.css";

export default function ProjectPage() {
	const [readme, setReadme] = useState<string | null>(null);
	const searchParams = useSearchParams();

	useGSAP(() => {
		gsap.fromTo(
			".main",
			{ x: 10, opacity: 0 },
			{ x: 0, duration: 0.2, opacity: 1 }
		);
	}, []);

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

	function fixImageUrls(markdown: string, repoUrl: string) {
		const match = repoUrl.match(
			/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/[^\/]+$/
		);
		if (!match) return markdown;

		const [, user, repo, branch] = match;
		const basePath = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/`;

		return markdown.replace(
			/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
			(_, alt, relativePath) => {
				const fullPath = basePath + relativePath.replace(/^\.\//, "");
				return `![${alt}](${fullPath})`;
			}
		);
	}

	useEffect(() => {
		const repoUrl = searchParams.get("repo");
		if (!repoUrl) return;

		const rawUrl = repoUrl
			.replace("github.com", "raw.githubusercontent.com")
			.replace("/blob/", "/");

		fetch(rawUrl)
			.then((res) => res.text())
			.then((text) => {
				const fixedMarkdown = fixImageUrls(text, repoUrl);
				setReadme(fixedMarkdown);
			})
			.catch((err) => {
				console.error("Failed to fetch README:", err);
				setReadme("Failed to load README.md.");
			});
	}, [searchParams]);

	return (
		<div className="w-screen h-screen flex flex-col xl:items-center px-4 py-8 main opacity-0 overflow-y-auto bg-white text-black">
			<button
				onClick={goBack}
				className="text-indigo-500 flex gap-2 items-center text-xl md:text-2xl font-semibold hover:cursor-pointer mb-6"
			>
				<ArrowLeft />
				Go back
			</button>

			{readme ? (
				<div className="markdown-body max-w-7xl w-full prose prose-sm sm:prose lg:prose-lg prose-img:rounded-lg prose-code:font-mono prose-pre:bg-gray-100 prose-pre:p-4 prose-ul:list-disc prose-ol:list-decimal">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeHighlight]}
					>
						{readme}
					</ReactMarkdown>
				</div>
			) : (
				<p className="text-gray-500">Loading README...</p>
			)}
		</div>
	);
}
