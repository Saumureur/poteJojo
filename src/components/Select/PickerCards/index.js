import React, { useState } from "react";
import { Card, CardContent, Grid, Icon, ThemeProvider, useTheme, Typography } from "@mui/material";
import PropTypes from "prop-types";

const PickerCards = ({ config, onItemSelected }) => {
  const theme = useTheme();
  const [selectedItems, setSelectedItems] = useState(config.multiSelect ? [] : []);

  const handleItemClick = (item) => {
    if (config.multiSelect) {
      const index = selectedItems.findIndex((selectedItem) => selectedItem === item);
      if (index === -1) {
        setSelectedItems([...selectedItems, item]);
      } else {
        const newSelectedItems = [...selectedItems];
        newSelectedItems.splice(index, 1);
        setSelectedItems(newSelectedItems);
      }
    } else {
      setSelectedItems(item);
    }

    if (onItemSelected && typeof onItemSelected === "function") {
      // Renvoyer les éléments sélectionnés si `multiSelect` est activé, sinon renvoyer l'élément sélectionné
      const selectedItemValue = config.multiSelect ? selectedItems : item;
      onItemSelected(selectedItemValue); // Appel de la fonction de rappel avec la valeur sélectionnée
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {config.items.map((item, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Card
              style={{
                cursor: "pointer",
                marginBottom: theme.spacing(1),
                border: `2px solid ${
                  (config.multiSelect && selectedItems.includes(item)) ||
                  (!config.multiSelect && selectedItems === item)
                    ? theme.palette.primary.main
                    : "transparent"
                }`,
                minHeight: "50px",
              }}
              onClick={() => handleItemClick(item)}
            >
              <CardContent>
                {item.Icon && (
                  <div style={{ textAlign: "center" }}>
                    {typeof item.Icon === "string" ? (
                      <Typography display="block" variant="h3" color={config.color} textGradient>
                        <Icon>{item.Icon}</Icon>
                      </Typography>
                    ) : (
                      <Typography display="block" variant="h3" color={config.color} textGradient>
                        {React.cloneElement(item.Icon, {
                          style: { color: theme.palette.primary.main },
                        })}
                      </Typography>
                    )}
                  </div>
                )}
                {item.Text && (
                  <Typography
                    display="block"
                    variant="h5"
                    fontWeight="bold"
                    align="center"
                    mt={1}
                    mb={1.5}
                  >
                    {item.Text}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

PickerCards.propTypes = {
  config: PropTypes.shape({
    multiSelect: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        Text: PropTypes.string,
        Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      })
    ).isRequired,
  }).isRequired,
  onItemSelected: PropTypes.func,
};

export default PickerCards;
