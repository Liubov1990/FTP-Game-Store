import React from "react";
import { useSelector, useDispatch } from "react-redux";
// material-ui
import { Paper, Button } from "@material-ui/core";
// actions
import { getGamesListAsync, setPage } from "../../redux/actions/imagesSearchActions";
// constants
import { formInputs } from "../../constants/sortPanelForm";
// components
import SortPanelDropdown from "./SortPanelDropdown";
// utils
import { debounce } from "./../../utils";
// styles
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { resetFields } from "./../../redux/actions/sortPanelActions";

const useStyles = makeStyles(styles);

function SortPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { platformField, categoryField, orderField } = useSelector(state => state.sortPanelReducer);
  const isResetDisabled = platformField === "all" && categoryField === "all" && orderField === "all";

  const peventedMultiRequest = debounce(() => {
    dispatch(getGamesListAsync());
    dispatch(setPage(1));
  });

  const resetAllFields = () => {
    dispatch(resetFields());
    dispatch(getGamesListAsync());
    dispatch(setPage(1));
  } 

  return (
    <Paper elevation={0} square>
      <div className={classes.searchOptions}>
        <h2>Featured games</h2>
        <form noValidate autoComplete="off" className={classes.form}>
          {formInputs.map(formInput => (
            <SortPanelDropdown key={formInput.id} {...formInput} />
          ))}
        </form>
        <div className={classes.buttons}>
          <Button variant="contained" classes={{ root: classes.buttonRoot }} onClick={peventedMultiRequest}>
            Sort
          </Button>
          <Button
            variant="contained"
            disabled={isResetDisabled}
            classes={{ root: classes.buttonRoot }}
            onClick={resetAllFields}
          >
            reset
          </Button>
        </div>
      </div>
    </Paper>
  );
}
export default SortPanel;
