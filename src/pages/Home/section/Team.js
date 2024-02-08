/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import starter1 from "assets/images/bulbizare.png";
import satrter2 from "assets/images/salameche.png";
import starter3 from "assets/images/carapuce.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Les starters
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Je ne suis pas sûr, je crois qu&apos;on ma dit que vous êtes trois, mais bon après là
              on en met autan qu&apos;on veut :)
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={starter1}
                name="Bulbizare"
                position={{ color: "success", label: "Plante" }}
                description="Bulbi bulbi bulbizare."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={satrter2}
                name="Salameche"
                position={{ color: "error", label: "Feu" }}
                description="Salameche salame salameche."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={starter3}
                name="Carapuce"
                position={{ color: "info", label: "Eau" }}
                description="Carapuce puce puce."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
