import MKBox from "components/MK/MKBox";
import MKTypography from "components/MK/MKTypography";
import MKAlert from "components/MK/MKAlert";
import MKButton from "components/MK/MKButton";

import Container from "@mui/material/Container";
//import { Link } from "@mui/material";
import Grid from "@mui/material/Grid";

import GoogleMapReact from "google-map-react";
import Card from "@mui/material/Card";

import React, { useState } from "react";

function Map() {
  const mapConfig = {
    center: {
      lat: 48.8,
      lng: 2.13333,
    },
    zoom: 11,
  };
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: mapConfig.center.lat, lng: mapConfig.center.lng },
      map,
      title: "Le chateau c'est làààà",
    });
    return marker;
  };

  const handleCopyAddress = (address) => {
    const el = document.createElement("textarea");
    el.value = address;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);

    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const [showAlert, setShowAlert] = useState(false); // State pour gérer l'affichage de l'alerte
  const handleOpenWaze = () => {
    const { lat, lng } = mapConfig.center;
    window.open(`https://www.waze.com/ul?ll=${lat},${lng}&navigate=yes`);
  };

  const handleOpenMaps = () => {
    const { lat, lng } = mapConfig.center;
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
  };
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ mx: "auto", height: "500px", width: "100%", maxHeight: "50vh" }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCYB3JgGZ3EPWnEDhndqWgjCf0zlnzhkgs" }}
              defaultCenter={mapConfig.center}
              defaultZoom={mapConfig.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            />
          </Grid>
          <Grid item xs={12} lg={4} alignItems="center" sx={{ mx: "auto" }}>
            <Card sx={{ height: "100%", padding: 3 }}>
              <MKBox position="relative" borderRadius="lg" mx={2} mt={0} sx={{ height: "100%" }}>
                <MKTypography
                  display="block"
                  variant="h2"
                  color="primary"
                  sx={{ textGradient: true }}
                >
                  Adresse
                </MKTypography>
                <MKTypography
                  display="block"
                  variant="body2"
                  fontWeight="bold"
                  mt={2}
                  mb={1.5}
                  sx={{ textDecoration: "underline" }}
                  onClick={() =>
                    handleCopyAddress("Château de Versailles, Place d’Armes, 78000 Versailles")
                  }
                >
                  Château de Versailles
                  <br />
                  Place d’Armes,
                  <br />
                  78000 Versailles
                </MKTypography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <MKButton
                      target="_blank"
                      rel="noreferrer"
                      color="primary"
                      size="small"
                      onClick={handleOpenWaze}
                    >
                      Ouvrir sur waze
                    </MKButton>
                  </Grid>
                  <Grid item xs={6}>
                    <MKButton
                      target="_blank"
                      rel="noreferrer"
                      color="primary"
                      size="small"
                      onClick={handleOpenMaps}
                    >
                      Ouvrir sur maps
                    </MKButton>
                  </Grid>
                </Grid>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {showAlert && (
        <MKAlert color="primary" sx={{ position: "fixed", bottom: 10, left: 10 }}>
          Adresse copiée!
        </MKAlert>
      )}{" "}
      {/* Affichage de l'alerte si showAlert est true */}
    </MKBox>
  );
}

export default Map;
