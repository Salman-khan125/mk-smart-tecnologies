import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(assets/hero/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Content */}
      <Box
        sx={{
          maxWidth: "900px",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: { xs: "2.2rem", md: "3.5rem" },
          }}
        >
          Solve Problems with{" "}
          <Box
            component="span"
            sx={{
              position: "relative",
              display: "inline-block",
              px: 1,
            }}
          >
            {/* RED ELLIPSE IMAGE */}
            <Box
              component="img"
              src="/assets/hero/elipse.png"
              alt="highlight"
              sx={{
                position: "absolute",
                left: -13, // align with text start
                bottom: 5, // slightly below text
                width: "120%", // a bit bigger than text
                height: "1em", // adjust to match text height
                zIndex: 1,
              }}
            />
            code
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "#ddd",
            maxWidth: 600,
            mx: "auto",
            fontSize: "1rem",
          }}
        >
          We create innovative software solutions that help businesses and
          individuals solve problems efficiently. Our technology-driven approach
          ensures scalable and effective results.
        </Typography>

        <Button
          component="a"
          href="https://wa.me/923408618145"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: 4,
            backgroundColor: "#e30613",
            color: "#fff",
            textTransform: "none",
            py: 1.5,
            px: 4,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#c10510",
            },
          }}
        >
          Get to know us
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
