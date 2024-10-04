import { Typography, Button } from "@mui/joy";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";

export default function ProjectHeader() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "start",
				width: "100%",
			}}
		>
			<Typography level="h4">Projects</Typography>
			<Button
				variant="soft"
				color="primary"
				startDecorator={<CastForEducationOutlinedIcon />}
			>
				More
			</Button>
		</div>
	);
}
