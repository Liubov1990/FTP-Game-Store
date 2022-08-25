import React from "react";
import { useSelector, useDispatch } from "react-redux";
// material-ui
import { Paper } from "@material-ui/core";
// actions
import { getGamesListAsync, setPage } from "../../redux/actions/imagesSearchActions";
import { resetFields } from "../../redux/actions/sortPanelActions";
// constants
import { formInputs } from "../../constants/sortPanelForm";
// components
import SortPanelDropdown from "./SortPanelDropdown";
import ButtonComponent from "../ButtonComponent";
// utils
import { debounce } from "./../../utils";
// styles
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function SortPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { platformField, categoryField, orderField } = useSelector(state => state.sortPanelReducer);
  const { status } = useSelector(state => state.imagesSearchReducer);

  const isResetDisabled = platformField === "all" && categoryField === "all" && orderField === "all";

  const peventedMultiRequest = debounce(() => {
    dispatch(getGamesListAsync());
    dispatch(setPage(1));
  });

  const resetAllFields = () => {
    dispatch(resetFields());
    dispatch(getGamesListAsync());
    dispatch(setPage(1));
  };

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
          <ButtonComponent
            value="Sort"
            padded="true"
            disabled={status === "FAILURE"}
            onClick={peventedMultiRequest}
          />
          <ButtonComponent
            value="Reset"
            padded="true"
            disabled={isResetDisabled}
            onClick={resetAllFields}
          />
        </div>
      </div>
    </Paper>
  );
}
export default SortPanel;
