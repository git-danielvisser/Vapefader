import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  brand: {
    color: "#fff",
    fontFamily: "'Sarabun', sans-serif",
    fontSize: "2.4rem",
    letterSpacing: "unset",
    marginBottom: "30px",
  },
  tagline: { color: "#fff", fontSize: "1rem" },
});

function Branding(props) {
  const { brand, tagline } = props;
  const classes = useStyles();

  return (
    <Box align="center">
      <Typography variant="h1" className={classes.brand}>
        {brand}
      </Typography>
      {tagline && (
        <Typography variant="h2" className={classes.tagline}>
          {tagline}
        </Typography>
      )}
    </Box>
  );
}

export default Branding;
