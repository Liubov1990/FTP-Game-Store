import React, { ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
// redux
import { RootState } from "../../redux/store";
import { getGamesListAsync } from "../../redux/actions/imagesSearchActions";
// constants
import { pageElementsAmount } from "../../constants/pagination";
// components
import Pagination from "../Pagination";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GamesGrid(): ReactElement {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { gamesList, page, status } = useSelector((state: RootState): RootState["imagesSearchReducer"] => state.imagesSearchReducer);

  const firstIndex = page === 1 ? 0 : (page - 1) * pageElementsAmount;
  const elementsPerPage = gamesList.slice(firstIndex, firstIndex + pageElementsAmount);

  useEffect(() => {
    dispatch(getGamesListAsync());
  }, [dispatch]);

  const makeRedirect = (id: number) => {
    history.push(`/games/${id}`);
  };

  return (
    <>
      {status === "FAILURE" && <div className={`${classes.gridContainer} error`}>Something went wrong. Please, try again or wisit our site later.</div>}
      {status === "SUCCESS" && (
        <>
          <div className={classes.gridContainer} data-testid="grid-test">
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
      )}
    </>
  );
}
export default GamesGrid;