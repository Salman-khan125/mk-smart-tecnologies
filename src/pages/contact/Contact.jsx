import { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error: " + (data.error || "Failed to send message"));
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }

    setSending(false);
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, md: 320 },
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
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ color: "#fff", opacity: 0.85 }}>Home / Contact</Typography>
        </Box>
      </Box>

      {/* ===== MAIN CONTENT ===== */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* ===== LEFT INFO ===== */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                  color: "#3A2357",
                  mb: 2,
                }}
              >
                Let’s Talk
              </Typography>

              <Typography
                sx={{
                  color: "#7A6F86",
                  mb: 4,
                  maxWidth: 420,
                  lineHeight: 1.7,
                }}
              >
                Have a project in mind or need help with your digital solutions? Our team is ready
                to assist you. Reach out and let’s build something great together.
              </Typography>

              {/* INFO BLOCKS */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>📍 Address</Typography>
                <Typography sx={{ color: "#7A6F86" }}>Lahore, Pakistan</Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>✉️ Email</Typography>
                <Typography>
                  <Box
                    component="a"
                    href="mailto:mkstech.hr@gmail.com"
                    sx={{
                      color: "#68acf5",
                      textDecoration: "none",
                      transition: "0.3s",
                      "&:hover": { color: "#0d4f96" },
                    }}
                  >
                    mkstech.hr@gmail.com
                  </Box>
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>📞 Phone</Typography>
                <Typography>
                  <Box
                    component="a"
                    href="tel:+923408618145"
                    sx={{
                      color: "#68acf5",
                      textDecoration: "none",
                      transition: "0.3s",
                      "&:hover": { color: "#0d4f96" },
                    }}
                  >
                    +92 340 8618145
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* ===== RIGHT FORM ===== */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "#3A2357",
                  mb: 3,
                }}
              >
                Send us a message
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                }}
              >
                <TextField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  fullWidth
                  sx={{ gridColumn: "1 / -1" }}
                  required
                />
                <TextField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ gridColumn: "1 / -1" }}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={sending}
                  sx={{
                    gridColumn: "1 / -1",
                    mt: 1,
                    backgroundColor: "#E30613",
                    py: 1.4,
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#c20510" },
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
