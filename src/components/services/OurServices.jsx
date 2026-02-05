import { Box, Container, Grid, Typography, Card } from "@mui/material";

const OurServices = () => {
  const services = [
    {
      icon: "/assets/hero/1.png",
      title: "Artificial Intelligence",
      description:
        "We build cutting-edge, user-friendly mobile apps tailored to your needs using the latest technology.",
    },
    {
      icon: "/assets/hero/2.png",
      title: "UI/UX Design",
      description:
        "We create intuitively visually appealing UI/UX designs for better engagement.",
    },
    {
      icon: "/assets/hero/3.png",
      title: "Mobile App Development",
      description:
        "We build cutting-edge, user-friendly mobile apps tailored to your needs using the latest technology.",
    },
    {
      icon: "/assets/hero/3.png",
      title: "Website Development",
      description:
        "We build cutting-edge, user-friendly Websites tailored to your needs using the latest technology.",
    },
    {
      icon: "/assets/hero/5.png",
      title: "ASO (App Store Optimization)",
      description:
        "We enhance app visibility, drive downloads, and boost rankings with ASO and marketing.",
    },
    {
      icon: "/assets/hero/4.png",
      title: "Quality Assurance",
      description:
        "Our QA team ensures flawless performance, reliability, and a seamless user experience.",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
     <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
  variant="h2"
  sx={{
    fontWeight: 700,
    fontSize: { xs: "1.8rem", md: "2.75rem" },
    lineHeight: 1.2,
    color: "#1a1a1a",
    mb: 2,
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    whiteSpace: "nowrap", // 🔥 prevents wrapping
  }}
>
  See Our
  <Box
    component="span"
    sx={{
      position: "relative",
      display: "inline-block",
    }}
  >
    Services
    <Box
      component="img"
      src="/assets/hero/Vector2.png"
      alt="underline"
      sx={{
        position: "absolute",
        left: 0,
        bottom: { xs: "-4px", md: "-6px" },
        width: "100%",
        height: "auto",
      }}
    />
  </Box>
</Typography>


        <Typography
          sx={{
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.6,
            color: "#555",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          We help clients develop high-quality products and improve their
          digital presence.
        </Typography>
      </Box>

      {/* GRID */}
    <Grid
  container
  spacing={3}
  justifyContent="center"
>
  {services.map((service, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={index}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 320, 
          p: 2.5,
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          
          backgroundColor: "#fff",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            borderColor: "#e30613",
          },
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 55,
            height: 55,
            backgroundColor: "#f8f9fa",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={service.icon}
            alt={service.title}
            sx={{ width: "65%", height: "65%", objectFit: "contain" }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            mb: 1.5,
          }}
        >
          {service.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          {service.description}
        </Typography>
      </Card>
    </Grid>
  ))}
</Grid>

    </Container>
  );
};

export default OurServices;
