import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
// actions
import { getGamesListAsync } from "../../redux/actions/imagesSearchActions";
// constants
import { pageElementsAmount } from "../../constants/pagination";
// components
import Pagination from "../../components/Pagination";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GamesGrid() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { gamesList, page } = useSelector(state => state.imagesSearchReducer);
  const firstIndex = page === 1 ? 0 : (page - 1) * pageElementsAmount;
  const elementsPerPage = gamesList.slice(firstIndex, firstIndex + pageElementsAmount);

  useEffect(() => {
    dispatch(getGamesListAsync());
  }, []);

  const makeRedirect = id => {
    history.push(`/games/${id}`);
  };

  return (
    <>
      <div className={classes.gridContainer}>
        {elementsPerPage.map(({ id, thumbnail, title }) => (
          <Paper
            key={id}
            onClick={() => makeRedirect(id)}
            style={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "101%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            className={classes.gridItem}
          >
            <div className={classes.gameName}>{title}</div>
          </Paper>
        ))}
      </div>
      <Pagination />
    </>
  );
}
export default GamesGrid;
