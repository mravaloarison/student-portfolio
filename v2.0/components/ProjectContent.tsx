import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MarkdownRenderer from "./MarkDownRenderer";

const fixImageUrls = (markdown: string, repoUrl: string) => {
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
};

const ProjectContent = () => {
	const [readme, setReadme] = useState<string | null>(null);
	const searchParams = useSearchParams();

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
		<>
			{readme ? (
				<MarkdownRenderer readme={readme} />
			) : (
				<p className="text-gray-500">Loading README...</p>
			)}
		</>
	);
};

export default ProjectContent;
