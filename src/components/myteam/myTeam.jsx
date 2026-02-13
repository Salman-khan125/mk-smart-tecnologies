import { Box, Container, Typography } from "@mui/material";



const teamMembers = [
  {
    name: "Zarri",
    role: "UI/UX Designer",
    image: "/assets/hero/image.png", 
    description:
      "We create intuitive, visually appealing UI/UX designs for better engagement designs for better engagement for better engagement",
  },
  {
    name: "Qasim",
    role: "iOS Developer",
    image: "/assets/hero/image1.png", 
    description:
     "We build seamless, high-performance iOS applications that deliver exceptional user experiences, leveraging Swift and the latest Apple technologies to ensure smooth functionality and elegant design.",
  },
  {
    name: "Umair Sulaiman",
    role: "Android Developer",
    image: "/assets/hero/image2.jpg", 
    description:
     "We create robust and scalable Android applications with intuitive interfaces, ensuring compatibility across devices and optimal performance using Kotlin and modern Android frameworks.",
  },
   {
    name: "Fareed",
    role: "ASO Specialist",
    image: "/assets/hero/image3.png", 
    description:
     "We optimize apps for maximum visibility and downloads on app stores, implementing strategic keywords, metadata, and performance analytics to boost user acquisition and engagement.",
  },
];

const MyTeam = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#3A2357",
            }}
          >
            My Team
          </Typography>

          {/* UNDERLINE VECTOR */}
          <Box
            component="img"
            src="/assets/hero/Vector3.png"
            alt="underline"
            sx={{
              mt: 1,
              mb: 1.5,
              height: 8,
            }}
          />

          <Typography
            sx={{
              color: "#8a7c96",
              fontSize: "0.95rem",
            }}
          >
            Our Amazing Team
          </Typography>
        </Box>

        {/* TEAM CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              
            },
            gap: 4,
          }}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                p: 4,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            borderColor: "#e30613",
          },
              }}
            >
              {/* PROFILE IMAGE */}
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 2,
                  backgroundColor: "#cbbfbf",
                }}
              />

              {/* NAME */}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#3A2357",
                }}
              >
                {member.name}
              </Typography>

              {/* ROLE */}
              <Typography
                sx={{
                  color: "#e30613",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  mb: 2,
                  
                }}
              >
                {member.role}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: "#8a7c96",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                {member.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MyTeam;
