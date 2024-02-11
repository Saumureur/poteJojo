import MKBox from "components/MK/MKBox";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import GoogleMapReact from "google-map-react";

function Map() {
  const mapConfig = {
    center: {
      lat: 48.8,
      lng: 2.13333,
    },
    zoom: 11,
  };

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto", height: "45vh" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCYB3JgGZ3EPWnEDhndqWgjCf0zlnzhkgs" }}
            defaultCenter={mapConfig.center}
            defaultZoom={mapConfig.zoom}
          ></GoogleMapReact>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Map;
