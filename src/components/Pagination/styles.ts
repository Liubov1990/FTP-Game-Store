export const paginationStyles = {
  rootUl: {
    justifyContent: "center",
    padding: "0 24px",
    margin: "25px 0",
    "& .MuiPaginationItem-root": {
      fontFamily: "Prompt",
    }
  },
  
  "@media(max-width: 576px)": {
    rootUl: {
      margin: "30px 40px",
      "& .MuiPaginationItem-icon": {
        fontSize: "1rem"
      },
      "& .MuiPaginationItem-root": {
        height: "25px",
        minWidth: "25px",
        fontSize: "0.75rem"
      }
    }
  }
};
