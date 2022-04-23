import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    flexDirection: "column",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
  },

  card: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    alignSelf: "center",
    width: "50%",
    textAlign: "center",
    padding: "50px",
    borderRadius: 3,
  },
  author: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  authorName: {
    fontStyle: "italic",
  },

  btn: {
    border: "solid red 1px",
    color: "white",
    width: "5%",
    padding: "50px",
    alignSelf: "center",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
  },
});

export const Quote = () => {
  const classes = useStyles();

  const { text } = useParams();
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();
  const handleHome = () => {
    navigation("/");
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote/random?author=${text}`
      );
      setQuote(result.data);
      setIsLoading(false);
    };
    setIsLoading(true);

    fetchQuotes();
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        ) : (
          <>
            {quote.length > 0 ? (
              quote.map((item, i) => (
                <Typography key={i} variant="h5">
                  "{item.quote}"
                </Typography>
              ))
            ) : (
              <Typography>There is nothing to show</Typography>
            )}
            <div className={classes.author}>
              {quote.length > 0
                ? quote.map((item, i) => (
                    <Typography key={i} className={classes.authorName}>
                      - {item.author}
                    </Typography>
                  ))
                : null}{" "}
            </div>
          </>
        )}
      </div>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          className={classes.btn}
          onClick={handleHome}
        >
          Home
        </Button>
      </div>
    </div>
  );
};
