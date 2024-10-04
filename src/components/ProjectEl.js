import { Button, Grid, Stack, Typography } from "@mui/joy";
import { ListOfTechnologies } from "./FakeDb";
import Technology from "./Technology";

export default function ProjectElement({ name, description, technologies }) {
	const LOT = ListOfTechnologies;

	return (
		<Grid item xs={12} sm={6}>
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
						icon={LOT.find((tech) => tech.name === technology).icon}
					/>
				))}
			</Stack>
			<Button sx={{ px: 0 }} variant="link">
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
		</Grid>
	);
}
