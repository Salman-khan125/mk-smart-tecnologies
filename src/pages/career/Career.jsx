import { Box, Container, Typography, Grid, Button } from "@mui/material";

const jobs = [
  { title: "UI/UX Designer", location: "Rawalpindi" },
  { title: "HR Intern", location: "Rawalpindi" },
  { title: "Web Designer", location: "Rawalpindi" },
  { title: "Android Developer", location: "Rawalpindi" },
  { title: "ASO Experts", location: "Rawalpindi" },
  { title: "QA Testers", location: "Rawalpindi" },
];

const Career = () => {
  return (
    <Box>
      {/* ===== HERO / BACKGROUND ===== */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 260, md: 320 },
          backgroundImage: `url("/assets/career/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem" },
            }}
          >
            Career
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#e0e0e0",
              fontSize: { xs: "0.9rem", md: "1.05rem" },
            }}
          >
            Connecting People and Possibilities Through Technology
          </Typography>
        </Box>
      </Box>

      {/* ===== OPEN POSITIONS ===== */}
      <Container sx={{ py: { xs: 5, md: 8 } }}>
        <Box sx={{ maxWidth: 800, mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.7rem", sm: "2.2rem", md: "2.6rem" },
              mt: 4,
            }}
          >
            Open Job Positions
          </Typography>

          <Box
            component="img"
            src="/assets/career/Vector.png"
            alt="vector"
            sx={{ width: { xs: 90, md: 120 }, mb: 2 }}
          />

          <Typography
            sx={{
              color: "#6b5e7a",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            At MK Smart Technologies, we believe in fostering a culture of
            collaboration, growth, and excellence. We’re on the lookout for
            talented individuals who share our vision.
          </Typography>

          <Typography
            sx={{
              color: "#6b5e7a",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.8,
            }}
          >
            Explore our current job openings below and take the next step toward
            unlocking your true potential with us.
          </Typography>
        </Box>

        {/* ===== JOB CARDS ===== */}
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "1rem", sm: "1.5rem", md: "1rem" },
          }}
        >
          {jobs.map((job, index) => (
            <Box key={index}>
              <Box
                sx={{
                  p: 3,
                  minHeight: 170,
                  borderRadius: 2,
                  border: "1px solid #eee",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#FBFBFB",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "1.05rem" }}>
                    {job.title}
                  </Typography>

                  <Typography sx={{ color: "#8a7d9c", fontSize: "0.9rem" }}>
                    {job.location}
                  </Typography>
                </Box>

                <Button
                  sx={{
                    alignSelf: "flex-end",
                    mt: 3,
                    color: "#E30613",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>

      {/* ===== LIFE AT MK SMART TECHNOLOGIES ===== */}
      <Container sx={{ pb: { xs: 6, md: 10 } }}>
        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          <Box sx={{ maxWidth: 800, mb: { xs: 4, md: 6 } }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.7rem", sm: "2.2rem", md: "2.6rem" },
                mb: 1,
              }}
            >
              Life at MK Smart Technologies
            </Typography>

            <Typography
              sx={{
                color: "#6b5e7a",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
              }}
            >
              At MK Smart Technologies, you’ll find less bureaucracy and more
              opportunities. From employee benefits to frequent engagement
              activities, we ensure our team feels empowered and valued.
            </Typography>
          </Box>  

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              mb: { xs: 3, md: 4 },
            }}
          >
            Company’s Anniversary
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
              },
              gap: { xs: "1rem", md: "1.5rem" },
            }}
          >
            {[
              "/assets/career/image1.png",
              "/assets/career/image2.png",
              "/assets/career/image3.png",
              "/assets/career/image4.png",
            ].map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt="Life at MK Smart Technologies"
                sx={{
                  width: "100%",
                  height: { xs: 220, sm: 260, md: 300 },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* ===== INDEPENDENCE DAY ===== */}
<Box sx={{ mt: { xs: 8, md: 12 } }}>
  {/* Title */}
  <Box sx={{ maxWidth: 800, mb: { xs: 3, md: 4 } }}>
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: { xs: "1.4rem", md: "1.8rem" },
      }}
    >
      Independence Day
    </Typography>
  </Box>

  {/* Images */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
      },
      gap: { xs: "1rem", md: "1.5rem" },
      mb: { xs: 6, md: 8 },
    }}
  >
    {[
      "/assets/career/image5.png",
      "/assets/career/image6.png",
    ].map((img, index) => (
      <Box
        key={index}
        component="img"
        src={img}
        alt="Independence Day"
        sx={{
  width: "100%",
  aspectRatio: "4 / 3",     // ✅ forces proper card ratio
  objectFit: "cover",       // ✅ fills card nicely
  objectPosition: "center", // ✅ centers important content
  borderRadius: 2,
  backgroundColor: "#f5f5f5", // subtle fallback (optional)
}}

      />
    ))}
  </Box>

  {/* ===== ANNUAL LUNCH ===== */}
  <Box sx={{ maxWidth: 800, mb: { xs: 3, md: 4 } }}>
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: { xs: "1.4rem", md: "1.8rem" },
      }}
    >
      Annual Lunch
    </Typography>
  </Box>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
      },
      gap: { xs: "1rem", md: "1.5rem" },
    }}
  >
    {[
      "/assets/career/image7.png",
      "/assets/career/image8.png",
    ].map((img, index) => (
      <Box
        key={index}
        component="img"
        src={img}
        alt="Annual Lunch"
        sx={{
          width: "100%",
          height: { xs: 220, sm: 260, md: 300 },
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
    ))}
  </Box>
</Box>

      </Container>
    </Box>
  );
};

export default Career;
