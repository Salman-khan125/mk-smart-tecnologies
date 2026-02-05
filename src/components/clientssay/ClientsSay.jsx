import {
  Box,
  Container,
  Typography,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const clients = [
  {
    name: "Leo",
    role: "Lead Designer",
    image: "/assets/hero/client1.png",
    rating: 4.5,
    title: "It was a very good experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    name: "Leo",
    role: "Lead Designer",
    image: "/assets/hero/client2.png",
    rating: 5,
    title: "It was a very good experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    name: "Leo",
    role: "Lead Designer",
    image: "/assets/hero/client3.png",
    rating: 4.5,
    title: "It was a very good experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
];

const MyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const visibleClients = isMobile
    ? [clients[currentIndex]]
    : [
        clients[(currentIndex - 1 + clients.length) % clients.length],
        clients[currentIndex],
        clients[(currentIndex + 1) % clients.length],
      ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff", overflowX: "hidden" }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#3A2357" }}>
            What Our Client Say
          </Typography>

          <Box
            component="img"
            src="/assets/hero/Vector3.png"
            alt="underline"
            sx={{ height: 12, mt: 1, mb: 2 }}
          />

          <Typography
            sx={{
              maxWidth: 520,
              mx: "auto",
              color: "#8a7c96",
              fontSize: "0.95rem",
            }}
          >
            We will help clients solve problems and build high-quality products
            with better appearance.
          </Typography>
        </Box>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "center",
          }}
        >
          {visibleClients.map((client, index) => {
            const isActive = !isMobile && index === 1;

            return (
              <Box
                key={index}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                  boxShadow: isActive
                    ? "0 25px 60px rgba(0,0,0,0.15)"
                    : "0 10px 30px rgba(0,0,0,0.08)",
                  transform: isActive ? "scale(1.08)" : "none",
                  transition: "0.3s ease",
                  maxWidth: "100%",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {/* PROFILE */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={client.image} sx={{ width: 56, height: 56 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>
                        {client.name}
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem", color: "#8a7c96" }}>
                        {client.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating value={client.rating} precision={0.5} readOnly />
                </Box>

                <Typography sx={{ fontWeight: 600, color: "#3A2357", mb: 1 }}>
                  {client.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#8a7c96",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {client.description}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* NAVIGATION */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + clients.length) % clients.length
              )
            }
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          {clients.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                transition: "0.3s ease",
                backgroundColor: i === currentIndex ? "#3A2357" : "#ddd",
              }}
            />
          ))}

          <IconButton
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % clients.length)
            }
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default MyClients;
