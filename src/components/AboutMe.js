import { Button, Card, CardContent, Stack, Typography } from "@mui/joy";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import React, { useState } from "react";
import DrawerAboutMe from "./DrawerAboutMe";

export default function AboutMe() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (inOpen) => () => {
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
					padding: { xs: 2, sm: 4 },
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
						<Typography level="title-lg">
							I am a fun guy, a developer, a dog Lover, and a
							musician.
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
