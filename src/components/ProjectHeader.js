import { Typography, Button } from "@mui/joy";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import { useState } from "react";
import DrawerProjects from "./DrawerProjects";

export default function ProjectHeader() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (inOpen) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setOpen(inOpen);
	};

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
				onClick={toggleDrawer(true)}
			>
				More
			</Button>

			<DrawerProjects open={open} toggleDrawer={toggleDrawer} />
		</div>
	);
}
