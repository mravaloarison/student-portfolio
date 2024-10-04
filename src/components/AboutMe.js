import { Button, Card, CardContent, Stack, Typography } from "@mui/joy";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import React, { useState } from "react";
import DrawerAboutMe from "./DrawerAboutMe";

export default function AboutMe() {
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
		<div>
			<Card
				variant="soft"
				sx={{
					maxWidth: 630,
					width: "100%",
					backgroundColor: "success.50",
				}}
			>
				<CardContent>
					<Stack
						direction="row"
						spacing={3}
						sx={{
							alignItems: "start",
							justifyContent: "space-between",
						}}
					>
						<Typography level="h4">
							I am a fun guy, a Developer, a Dog Lover, and a
							Musician
						</Typography>
						<div>
							<Button
								variant="soft"
								color="success"
								startDecorator={<ContactsOutlinedIcon />}
								onClick={toggleDrawer(true)}
							>
								About
							</Button>
						</div>
					</Stack>
				</CardContent>
			</Card>

			<DrawerAboutMe open={open} toggleDrawer={toggleDrawer} />
		</div>
	);
}
