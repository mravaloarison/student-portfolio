import { Button, Tooltip } from "@mui/joy";

export default function Technology({ name, icon }) {
	return (
		<Tooltip title={name}>
			<Button
				variant="outlined"
				startDecorator={
					<img
						width="18"
						height="18"
						src={icon}
						alt="icon"
						style={{ marginRight: 0.5 + "em" }}
					/>
				}
				sx={{
					px: 1,
					py: 0.2,
					my: 0.5,
					mr: 0.9,
					fontSize: 0.6 + "em",
				}}
				size="small"
			>
				{name}
			</Button>
		</Tooltip>
	);
}
