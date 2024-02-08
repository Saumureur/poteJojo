// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/bier.jpg";
import bgBack from "assets/images/bier.jpg";

//Icone
import SportsBarIcon from "@mui/icons-material/SportsBar";
import InstagramIcon from "@mui/icons-material/Instagram";
//import RestaurantIcon from "@mui/icons-material/Restaurant";
//import CastleIcon from "@mui/icons-material/Castle";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto", height: "100%" }}>
            <RotatingCard sx={{ mx: "auto", height: "100%" }}>
              <RotatingCardFront
                icon={<SportsBarIcon />}
                image={bgFront}
                title={""}
                description={
                  <>
                    <br />
                    <br />
                    <br />
                  </>
                }
                sx={{ mx: "auto", height: "100%" }}
              />
              <RotatingCardBack
                image={bgBack}
                title="Wohoo"
                description={
                  <>
                    <br />
                    <br />
                    Par le pouvoir de l&apos;amitié. On va se bourrer la gueule
                    <br />
                    <br />
                    <br />
                  </>
                }
                sx={{ mx: "auto", height: "100%" }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="pool"
                  title="Petite piscine"
                  description="On va pas s'arroser que le gosier."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<InstagramIcon />}
                  title="Photobooth"
                  color="primary"
                  description="Pour des souvenirs innoubliables. Bon je sais pas si il y en aura mais je remplis comme je peux"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="restaurant"
                  title="un diner de roi"
                  description="De la nourriture digne d'un retaurant 19 étoiles"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="castle"
                  title="Ptit chateua"
                  description="Un lieu digne pour une soirée digne."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
