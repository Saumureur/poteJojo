import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

import MKBox from "components/MK/MKBox";
import MKTypography from "components/MK/MKTypography";

import Counters from "./section/Counters";

import bgImage from "assets/images/castle.jpg";
import Information from "pages/Home/section/Information";
import Team from "./section/Team";
import Map from "./section/Map";

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
              Soirée pote jojo
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Oyez Oyez les gueux on va faire une petite soirée au chateau, donc venez ou on vous
              coupe la tete
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Team />
        <Map />
      </Card>
      <MKBox pt={3} px={1} mt={3}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
