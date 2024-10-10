import { Card, CardContent, Box, Grid } from "@mui/joy";
import ProjectElement from "./ProjectEl";
import { ListOfProjects } from "./FakeDb";
import ProjectHeader from "./ProjectHeader";

export default function Projects() {
	const LOP = ListOfProjects.slice(0, 6);

	return (
		<div>
			<Card
				variant="soft"
				width={{ xs: "100%", sm: 630 }}
				sx={{
					maxWidth: 630,
					backgroundColor: "primary.50",
					padding: { xs: 2, sm: 4 },
				}}
			>
				<CardContent>
					<ProjectHeader />
					<Box mt={2}>
						<Grid container spacing={4}>
							{LOP.map((project) => (
								<ProjectElement
									key={project.name}
									name={project.name}
									description={project.description}
									technologies={project.technologies}
								/>
							))}
						</Grid>
					</Box>
				</CardContent>
			</Card>
		</div>
	);
}
