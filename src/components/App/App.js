import React, { useState } from "react";
import generateSchema from "../../generateSchema";

import Branding from "../Branding/Branding.js";
import Schema from "../Schema/Schema.js";
import SchemaForm from "../SchemaForm/SchemaForm.js";

import { Box, Container, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  formSlide: {
    background:
      "linear-gradient(180deg, rgba(245,0,87,1) 0%, rgba(63,81,181,1) 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 90%",
    padding: "20px 10px",
  },
});

function App() {
  const classes = useStyles();
  let [schemaItems, setSchemaItems] = useState(null);

  const handleFormSubmit = (formData) => {
    setSchemaItems(generateSchema(formData));
  };

  return (
    <div className="App">
      <Box p={2} className={classes.formSlide}>
        <Container maxWidth="sm">
          <header className="header">
            <Branding
              name="Vapefader"
              tagline="Gradually quit vaping or smoking  with a generated schema."
            />
          </header>
          <Box mt={3}>
            <Paper>
              <Box p={5}>
                <SchemaForm onSubmit={handleFormSubmit} />
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
      {schemaItems && (
        <Box p={2} mt={5}>
          <Container maxWidth="md">
            <Schema schemaItems={schemaItems} />
          </Container>
        </Box>
      )}
    </div>
  );
}

export default App;
