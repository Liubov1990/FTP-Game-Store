import React from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// actions
import * as sortPanelActions from "../../redux/actions/sortPanelActions";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function SortPanelDropdown({ id, formLabel, options }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const value = useSelector(state => state.sortPanelReducer[id]);

  const handleChange = event => {
    const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);
    const action = sortPanelActions[`set${capitalizedId}`];
    dispatch(action(event.target.value));
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={id}>{formLabel}</InputLabel>
      <Select labelId={formLabel} id={formLabel} value={value} onChange={handleChange}>
        {options.map(({ value }) => (
          <MenuItem key={value} value={value}>
            {value.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SortPanelDropdown;