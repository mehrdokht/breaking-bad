import React from "react";
import CharacterItem from "./CharacterItem";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
  },
});
const CharacterGrid = ({ items, isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {" "}
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </div>
  );
};

export default CharacterGrid;
