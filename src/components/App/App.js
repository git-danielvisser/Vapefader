import React, { useState, useRef } from "react";
import generateSchemaWorker from "../../generateSchema/generateSchema.worker.js";
import { smoothScrollTo } from "../../helpers.js";

import Branding from "../Branding/Branding.js";
import Schema from "../Schema/Schema.js";
import SchemaForm from "../SchemaForm/SchemaForm.js";

import { Box, Container, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formSlide: {
    background:
      "linear-gradient(166deg, rgba(245,0,87,1) 10%, rgba(63,81,181,1) 90%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    boxSizing: "border-box",
    minHeight: "100vh",
  },
});

function App() {
  const [schemaItems, setSchemaItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();
  const schemaContainerEle = useRef(null);

  const handleFormSubmit = (formData) => {
    setIsLoading(true);

    const worker = new generateSchemaWorker();
    worker.postMessage(formData);
    worker.onmessage = (e) => {
      setSchemaItems(e.data);
      setIsLoading(false);
      smoothScrollTo(schemaContainerEle.current, -40);
    };
  };

  return (
    <div className="App">
      <Box className={classes.formSlide}>
        <Container maxWidth="sm">
          <header className="header">
            <Box p={5}>
              <Branding
                brand="Vapefader"
                tagline="Gradually quit vaping or smoking  with a generated schema."
              />
            </Box>
          </header>
          <Box>
            <Paper>
              <Box p={5}>
                <SchemaForm onSubmit={handleFormSubmit} isLoading={isLoading} />
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      {schemaItems && (
        <Box p={2} mt={5}>
          <Container ref={schemaContainerEle} maxWidth="md">
            <Schema schemaItems={schemaItems} />
          </Container>
        </Box>
      )}
    </div>
  );
}

export default App;
