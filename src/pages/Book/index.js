import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MK/MKBox";
import MKTypography from "components/MK/MKTypography";

import bgImage from "assets/images/nuitEtoilee.jpg";
import TypeResa from "./Section/TypeResa";

function Home() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center", paddingTop: 15 }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Réservation
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <TypeResa />
      <MKBox pt={3} px={1} mt={3}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
