import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const MarkdownRenderer = ({ readme }: { readme: string }) => {
	return (
		<div className="markdown-body max-w-3xl w-full prose prose-sm sm:prose lg:prose-lg prose-img:rounded-lg prose-code:font-mono prose-pre:bg-gray-100 prose-pre:p-4 prose-ul:list-disc prose-ol:list-decimal">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeHighlight]}
			>
				{readme}
			</ReactMarkdown>
		</div>
	);
};

export default MarkdownRenderer;
