import { Grid, CircularProgress } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import CharacterGrid from "../components/characters/CharacterGrid";
import Search from "../components/characters/Search";
import "../Main.module.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  sortContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  dropDown: {
    margin: "5px !important",
  },
  loading: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    marginTop: "300px",
  },
});

const Home = () => {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const [sort, setSort] = useState("name");
  const [sortType, setSortType] = useState("ascending");

  // performance tips: not recreating the function after each render
  const handleSortChange = useCallback((e) => {
    setSort(e.target.value);
  }, []);

  const handleSortTypeChange = useCallback((e) => {
    setSortType(e.target.value);
  }, []);

  const oldQuery = useRef("initial");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${realQuery}`
      );
      setItems(result.data);
      setIsLoading(false);
    };

    let realQuery = query?.length > 2 ? query : "";
    let timeoutId;
    if (realQuery !== oldQuery.current) {
      setIsLoading(true);
      timeoutId = setTimeout(fetchItems, 2000);
    }
    oldQuery.current = realQuery;
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [query]);

  const sortedItems = useMemo(
    () =>
      items.sort(
        sortType === "ascending"
          ? (a, b) => a[sort].localeCompare(b[sort])
          : (a, b) => b[sort].localeCompare(a[sort])
      ),
    [sort, items, sortType]
  );

  return (
    <div className={classes.root}>
      <Search query={query} getQuery={(q) => setQuery(q)} />
      <Grid container className={classes.sortContainer}>
        <FormControl className={classes.dropDown}>
          <Select value={sort} onChange={handleSortChange}>
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"nickname"}>Nickname</MenuItem>
            <MenuItem value={"birthday"}>Birthday</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.dropDown}>
          <Select value={sortType} onChange={handleSortTypeChange}>
            <MenuItem value={"ascending"}>Ascending</MenuItem>
            <MenuItem value={"descending"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <CharacterGrid items={sortedItems} />
      )}
    </div>
  );
};

export default Home;
