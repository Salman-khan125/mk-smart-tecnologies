import { Box, Container, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box>
      {/* ===== HERO / BACKGROUND ===== */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, md: 300 },
          backgroundImage: `url("/assets/services/background.jpg")`,
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
              fontSize: { xs: "1.8rem", md: "3rem" },
            }}
          >
            Services
          </Typography>
          <Typography sx={{ color: "#fff", opacity: 0.8 }}>
            Home / Services
          </Typography>
        </Box>
      </Box>

      {/* ===== CONTENT ===== */}
      <Container sx={{ py: { xs: 6, md: 10 }, }}>
        {/* ================= SERVICE 1 ================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 29 },
            mb: { xs: 8, md: 12 },
          }}
        >
          {/* TEXT */}
          <Box sx={{ flex: 1 }}>
            {/* Title with vector */}
            <Box sx={{ position: "relative", display: "inline-block", mb: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                }}
              >
                App Development
              </Typography>
              <Box
                component="img"
                src="/assets/services/Vector.png"
                alt="underline"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -10,
                  width: { xs: 70, md: 100 },
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#6b5e7a",
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              We specialize in providing cutting-edge mobile app development
              services that help businesses thrive in the digital landscape.
              Our team of skilled developers and designers is passionate about
              creating innovative and user-friendly mobile applications
              tailored to meet your unique business requirements. We excel in
              building custom mobile applications from scratch, leveraging the
              latest technologies and industry best practices.
            </Typography>
          </Box>

          {/* IMAGE */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="/assets/services/image1.png"
              alt="App Development"
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 380, md: 480 },
                borderRadius: 3,
                mt: { xs: 1, md: 0 },
              }}
            />
          </Box>
        </Box>

        {/* ================= SERVICE 2 ================= */}
        <Box maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 29 },
             p: 4 
          }}
        >
          {/* IMAGE */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="/assets/services/image2.png"
              alt="Web Development"
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 380, md: 480 },
                borderRadius: 3,
              }}
            />
          </Box>

          {/* TEXT */}
          <Box sx={{ flex: 1}}>
            <Box sx={{ position: "relative", display: "inline-block", mb: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                }}
              >
                Web Development
              </Typography>
              <Box
                component="img"
                src="/assets/services/Vector.png"
                alt="underline"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -10,
                  width: { xs: 70, md: 100 },
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#6b5e7a",
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              We specialize in creating custom web solutions tailored to meet
              your unique business requirements. Our experienced developers
              leverage the latest technologies to build robust and scalable
              websites. Whether you need an e-commerce platform or a web
              application, we transform your vision into a fully functional and
              feature-rich online presence.
            </Typography>
          </Box>
        </Box>


          {/* ================= SERVICE 3 ================= */}
        
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 29 },
            mt: { xs: 8, md: 12 },
          }}
        >
          {/* TEXT */}
          <Box sx={{ flex: 1 }}>
            {/* Title with vector */}
            <Box sx={{ position: "relative", display: "inline-block", mb: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                }}
              >
                UI/UX Design
              </Typography>
              <Box
                component="img"
                src="/assets/services/Vector.png"
                alt="underline"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -10,
                  width: { xs: 70, md: 100 },
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#6b5e7a",
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              We specialize in creating intuitive and visually appealing UI/UX designs
               that enhance user engagement and satisfaction. Our design process begins
                with thorough market research and user analysis to understand your target
                 audience's needs and preferences. Whether you need a complete redesign or 
                 enhancements to an existing product, we deliver solutions that drive results
                  and elevate your digital presence
            </Typography>
          </Box>

          {/* IMAGE */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="/assets/services/image3.png"
              alt="App Development"
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 380, md: 480 },
                borderRadius: 3,
              }}
            />
          </Box>
        </Box>

           {/* ================= SERVICE 4 ================= */}
        <Box maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 29 },
             p: 4 
          }}
        >
          {/* IMAGE */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="/assets/services/image4.png"
              alt="Web Development"
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 380, md: 480 },
                borderRadius: 3,
              }}
            />
          </Box>

          {/* TEXT */}
          <Box sx={{ flex: 1}}>
            <Box sx={{ position: "relative", display: "inline-block", mb: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                }}
              >
                App Store Optimization
              </Typography>
              <Box
                component="img"
                src="/assets/services/Vector.png"
                alt="underline"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -10,
                  width: { xs: 70, md: 100 },
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#6b5e7a",
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
             We offer expert App Store Optimization (ASO) and marketing
              servicesdesigned to enhance your app's visibility and drive
               organic downloads. Our approach includes comprehensive keyword
                research to identify relevant search terms that attract 
               high-intent users, ensuring your app ranks prominently. Our
                team also implements  effective strategies to encourage positive
                 user reviews, which are crucial for  improving your app’s 
                 ranking and credibility.
            </Typography>
          </Box>
        </Box>

        
         {/* ================= SERVICE 3 ================= */}
        
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 29 },
            mt: { xs: 8, md: 12 },
          }}
        >
          {/* TEXT */}
          <Box sx={{ flex: 1 }}>
            {/* Title with vector */}
            <Box sx={{ position: "relative", display: "inline-block", mb: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                }}
              >
                UI/UX Design
              </Typography>
              <Box
                component="img"
                src="/assets/services/Vector.png"
                alt="underline"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -10,
                  width: { xs: 70, md: 100 },
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#6b5e7a",
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              We specialize in creating intuitive and visually appealing UI/UX designs
               that enhance user engagement and satisfaction. Our design process begins
                with thorough market research and user analysis to understand your target
                 audience's needs and preferences. Whether you need a complete redesign or 
                 enhancements to an existing product, we deliver solutions that drive results
                  and elevate your digital presence
            </Typography>
          </Box>

          {/* IMAGE */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="/assets/services/image5.png"
              alt="App Development"
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 380, md: 480 },
                borderRadius: 3,
              }}
            />
          </Box>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Services;
