// src/components/background/Background.jsx
import { Box, Button, Typography } from "@mui/material";
import bgImage from "/assets/hero/background2.png"; // adjust path if needed

const Background = () => {
  

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 3 },
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          minHeight: { xs: 220, sm: 260, md: 300 },
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.55)",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            height: "100%",
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: 500,
              maxWidth: 700,
              mb: 3,
              lineHeight: 1.4,
            }}
          >
            Have a question or ready to start your project? let’s explore how
            we can bring your vision to life!
          </Typography>

       <Button
  variant="contained"
  component="a"
  href="mailto:mkstech.hr@gmail.com?subject=Project Inquiry"
  sx={{
    bgcolor: "#e50914",
    px: 4,
    py: 1.2,
    fontSize: "0.95rem",
    textTransform: "none",
    borderRadius: 2,
    "&:hover": {
      bgcolor: "#c40812",
    },
  }}
>
  Get in touch
</Button>

        </Box>
      </Box>
    </Box>
  );
};

export default Background;
