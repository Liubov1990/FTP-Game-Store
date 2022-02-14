import React from "react";
import { useDispatch } from "react-redux";
// material-ui
import { Paper, Button } from "@material-ui/core";
// actions
import { getGamesListAsync } from "../../redux/actions/imagesSearchActions";
// constants
import { formInputs } from "../../constants/sortPanelForm";
// components
import SortPanelDropdown from "./SortPanelDropdown";
// styles
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function SortPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function debounce(funk, timeout = 800){
    let timer;
    return (...args) => {
      if (!timer) {
        funk.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    };
  }

  const peventedMultiRequest = debounce(() => dispatch((getGamesListAsync())));

  return (
    <Paper elevation={0} square>
      <div className={classes.searchOptions}>
        <h2>Featured games</h2>
        <form noValidate autoComplete="off" className={classes.form}>
          {formInputs.map(formInput => (
            <SortPanelDropdown key={formInput.id} {...formInput} />
          ))}
        </form>
        <Button
          variant="contained"
          classes={{ root: classes.buttonRoot }}
          onClick={peventedMultiRequest}
        >
          Sort
        </Button>
      </div>
    </Paper>
  );
}

export default SortPanel;
