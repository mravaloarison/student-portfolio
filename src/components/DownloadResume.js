import * as React from "react";
import Button from "@mui/joy/Button";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

export default function DownloadResume() {
	const downloadResume = () => {
		window.open(
			"https://docs.google.com/document/d/1DtW2dN2mNKDcxAfM6rUC4l2Anjvo_oW4xK46Q4S7ne0/edit?usp=sharing",
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
