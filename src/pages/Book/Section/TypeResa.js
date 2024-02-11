import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import { PiTentFill } from "react-icons/pi";

import MKBox from "components/MK/MKBox";
import PickerCards from "components/Select/PickerCards";

import { Card, Grid, Typography } from "@mui/material";
function TypeResa() {
  const config = {
    multiSelect: false,
    color: "primary",
    items: [
      { Text: "item1", Icon: <AirlineSeatIndividualSuiteIcon /> },
      {
        Text: "item2",
        Icon: <PiTentFill />,
      },
      // Ajoutez d'autres éléments selon vos besoins
    ],
  };

  const handleItemSelected = (selectedItem) => {
    console.log("Item sélectionné :", selectedItem);
  };

  return (
    <MKBox component="section" py={3}>
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
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography display="block" variant="h2" textAlign="center">
              Type de reservation
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PickerCards config={config} onItemSelected={handleItemSelected} />
          </Grid>
        </Grid>
      </Card>
    </MKBox>
  );
}

export default TypeResa;
