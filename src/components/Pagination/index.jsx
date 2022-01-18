import React from "react";
import { useDispatch, useSelector } from "react-redux";
// matrial-ui
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
// actions
import { setPage } from "../../redux/actions/imagesSearchActions";
// styles
import { paginationStyles } from "./styles";

const useStyles = makeStyles(paginationStyles);

function PaginationComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { page, totalPages } = useSelector(state => state.imagesSearchReducer);

  const onPageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div>
      <Pagination
        onChange={onPageChange}
        page={page}
        count={totalPages}
        classes={{
          ul: classes.rootUl
        }}
      />
    </div>
  );
}
export default PaginationComponent;
