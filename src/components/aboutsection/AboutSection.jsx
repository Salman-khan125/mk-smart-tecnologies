import { Box, Button, Container, Grid, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid 
      maxWidth= "lg"
        container 
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column-reverse", md: "row-reverse" } // Image left on desktop, image first on mobile
        }}
      >
        {/* LEFT SIDE - Text Content */}
        <Grid item xs={12} md={6} lg={3} order={{ xs: 2, md: 2 }}>
          <Box sx={{ position: "relative" , justifyContent: "space-between", mr: {md:13}}}>
            {/* Title with Vector */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.75rem" },
                lineHeight: 1.2,
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              About{" "}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                us
                {/* Yellow Vector/Underline */}
                <Box
                  component="img"
                  src="/assets/hero/Vector.png" // Replace with your actual path
                  alt="underline"
                  sx={{
                    position: "absolute",
                    right: 5,
                    bottom: "-8px",
                    width: { xs: "200%", sm: "200%", md: "200%" },
                    height: "auto",
                  }}
                />
              </Box>
            </Typography>

            {/* First Paragraph */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.7,
                color: "#333",
                mb: 3,
                maxWidth: { md: "560px" },
              }}
            >
              MK Smart Technologies is a leading developer of Web and Mobile related 
              applications and solutions in Pakistan. Our company was established in 2018, 
              with a focus on the design and development of innovative solutions for this 
              converging market of Web and Mobile. In addition to our own product 
              development, we offer custom development services and system integration 
              for clients.
            </Typography>

            {/* Second Paragraph */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.7,
                color: "#333",
                mb: 4,
                maxWidth: { md: "560px" },
              }}
            >
              We pride ourselves as one of the top Web and Digital design companies in 
              Pakistan having list-of-clients, who use our services in graphic design, 
              web user interface, and digital presence. Our design process and dedication 
              to clients make us stand out from the others.
            </Typography>

            {/* Read More Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e30613", // Matching your hero button
                color: "#fff",
                textTransform: "none",
                
                fontSize: "1rem",
                py: 0.8,
                px: 4,
                borderRadius: "8px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#c10510",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
                transition: "all 0.3s ease",
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>

        {/* RIGHT SIDE - Image */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src="/assets/hero/Group.png" 
              alt="About MK Smart Technologies"
              loading="lazy"
              sx={{
                width: "100%",
                maxWidth: { xs: "320px", sm: "340px", md: "400px" },
                height: "auto",
                borderRadius: { xs: "12px", md: "16px" },
                
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;