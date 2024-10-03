import * as React from "react";
import Button from "@mui/joy/Button";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

export default function DownloadResume() {
	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = "/resume.pdf";
		link.download = "resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Button
			component="label"
			role={undefined}
			tabIndex={-1}
			variant="outlined"
			color="neutral"
			startDecorator={<CloudDownloadOutlinedIcon />}
			onClick={downloadResume}
		>
			Resume
		</Button>
	);
}
