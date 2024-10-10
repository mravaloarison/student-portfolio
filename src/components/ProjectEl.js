import { Button, Grid, Stack, Typography } from "@mui/joy";
import { ListOfTechnologies } from "./FakeDb";
import Technology from "./Technology";
import { useState } from "react";

import { Modal } from "@mui/joy";
import ModalProjectDetail from "./ModalProjectDetail";

export default function ProjectElement({ name, description, technologies }) {
	const LOT = ListOfTechnologies;

	const [open, setOpen] = useState(false);

	return (
		<Grid xs={12} sm={6}>
			<Stack
				direction="row"
				spacing={1}
				sx={{
					alignItems: "start",
				}}
			>
				{technologies.map((technology) => (
					<Technology
						key={technology}
						name={technology}
						icon={LOT.find((el) => el.name === technology).icon}
					/>
				))}
			</Stack>
			<Button sx={{ px: 0 }} variant="link" onClick={() => setOpen(true)}>
				<Typography
					level="title-md"
					sx={{
						textDecoration: "underline",
					}}
				>
					{name}
				</Typography>
			</Button>
			<Typography level="body-sm">{description}</Typography>

			<Modal
				aria-labelledby="close-modal-title"
				open={open}
				onClose={(_event, reason) => {
					setOpen(false);
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<ModalProjectDetail name={name} />
			</Modal>
		</Grid>
	);
}
