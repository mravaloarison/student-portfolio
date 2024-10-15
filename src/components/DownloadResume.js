import * as React from "react";
import Button from "@mui/joy/Button";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

export default function DownloadResume() {
	const downloadResume = () => {
		window.open(
			"https://drive.google.com/file/d/1I0UHi9_8CpcIdoy62vHd-pyt_49gMhJT/view?usp=sharing",
			"_blank"
		);
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
