import React from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    borderRadius: 3,
    color: "white",
    padding: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    marginTop: "10px",
    width: "100%",
    cursor: "pointer",
  },
  card: {
    display: "flex",
    flexDirection: "row",
  },
  info: {
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: 3,
  },
  items: {
    color: "black",
    lineHeight: "1.2rem",
  },

  item: {
    paddingTop: "5px",
  },
  charName: {
    color: "black",
    lineHeight: "1.2rem",
    textAlign: "center",
  },
});
const CharacterItem = ({ item }) => {
  const navigation = useNavigate();
  const text = item.name.replace(" ", "+");

  const handleQuote = () => {
    navigation(`/quotes/${text}`);
  };
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <div className={classes.card} onClick={handleQuote}>
        <div>
          {" "}
          <img src={item.img} alt="" className={classes.image} />
        </div>
        <div className={classes.info}>
          <ul className={classes.items}>
            <h3 className={classes.charName}>{item.name}</h3>

            <li className={classes.item}>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li className={classes.item}>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li className={classes.item}>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li className={classes.item}>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
