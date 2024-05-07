import { Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{borderTop: '1px solid grey', padding: '24px', margin: '4px'}}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Your Company
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href="#">
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link color="inherit" href="#">
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
