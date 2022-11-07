import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// actions
import * as sortPanelActions from "../../redux/actions/sortPanelActions";
// styles
import { styles } from "./styles";
import { RootState } from "../../redux/store";
import {
  CategoryFieldEnum,
  PlatformFieldEnum,
  OrderFieldEnum,
  SortPanelEnum
} from "../../redux/reducers/sortPanelReducer/types";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {
  SortingFieldsEnum,
} from "../../redux/actions/sortPanelActions/types";

const useStyles = makeStyles(styles);

interface ISortPanelDropdownProps {
  id: SortPanelEnum;
  formLabel: string;
  options: CategoryFieldEnum[] | PlatformFieldEnum[] | OrderFieldEnum[];
}

function SortPanelDropdown({ id, formLabel, options }: ISortPanelDropdownProps): ReactElement {
  const classes: ClassNameMap<string> = useStyles();
  const dispatch = useDispatch();

  const { status } = useSelector((state: RootState): RootState["imagesSearchReducer"] => state.imagesSearchReducer);
  const value = useSelector(
    (state: RootState): RootState["sortPanelReducer"][SortPanelEnum] => state.sortPanelReducer[id]
  );

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
    const target = event.target as HTMLSelectElement;
    const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);
    const actionName = `set${capitalizedId}` as unknown as SortingFieldsEnum;
    const actionFunc: Function = sortPanelActions[actionName];
    dispatch(actionFunc(target.value));
  };

  return (
    <FormControl className={classes.formControl} disabled={status === "FAILURE"}>
      <InputLabel id={id}>{formLabel}</InputLabel>
      <Select labelId={formLabel} id={formLabel} value={value} onChange={handleChange}>
        {options?.map((value: string) => (
          <MenuItem key={value} value={value} classes={{ root: classes.rootMenuItem }}>
            {value.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default SortPanelDropdown;
