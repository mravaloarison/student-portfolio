import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function Video({ link, projectName }) {
	return (
		<Card variant="soft">
			<CardContent>
				<iframe
					frameBorder="0"
					height={{ sm: "321", xs: "213" }}
					src={link}
				></iframe>
			</CardContent>
		</Card>
	);
}
