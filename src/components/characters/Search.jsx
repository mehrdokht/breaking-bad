import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    borderRadius: "10px",
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
});
const Search = ({ getQuery, query }) => {
  console.log({ query });
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search characters"
        value={query}
        onChange={(e) => getQuery(e.target.value)}
        autoFocus
      />
    </Grid>
  );
};

export default Search;
