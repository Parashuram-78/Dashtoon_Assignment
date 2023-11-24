import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "./components/TwoSidedLayout";
import Box from "@mui/joy/Box";

export default function HeroLeft01() {
  return (
    <Box
      sx={{
        height: "100vh",
        scrollSnapType: "y mandatory",
        "& > div": {
          scrollSnapAlign: "start",
        },
      }}
    >
      <TwoSidedLayout>
        <Typography color="success" fontSize="lg" fontWeight="lg">
          Unleash Your Imagination
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Crafting Epic Worlds with Our Comic Generator
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Bring Your Stories to Life and Share the Adventure. Get Started for Free!
        </Typography>
        <Link to="/create">
          <Button size="lg" color="success" endDecorator={<ArrowForward fontSize="xl" />}>
            Get Started
          </Button>
        </Link>
        <Typography
          level="body-xs"
          sx={{
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Dashtoon Assignment
        </Typography>
      </TwoSidedLayout>
    </Box>
  );
}
