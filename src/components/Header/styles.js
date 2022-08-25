export const styles = () => ({
  rootPaper: {
    minHeight: "76px",
    padding: "0 24px",
    "&.MuiPaper-elevation1": {
      boxShadow: "none"
    }
  },
  paperContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1440px",
    height: "76px",
    margin: "0 auto",
    "& > a:visited": {
      color: "#3f444e",
    },
  },
  logo: {
    textTransform: "uppercase",
    fontWeight: 800,
    cursor: "pointer",
  },
  noBereak: {
    display: "inline-block",
  },
  playIcon: {
    verticalAlign: "bottom"
  },
  flexContainer: {
    justifyContent: "space-around",
    width: "350px",
    maxWidth: "350px"
  },
  indicator: {
    backgroundColor: "transparent"
  },
  rootTab: {
    minWidth: "unset",
    color: "#9d9fa5",
    "&:hover": {
      color: "#575b67"
    },
    "&.Mui-selected": {
      color: "#575b67"
    }
  },
  user: {
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    textTransform: "capitalize",
    fontWeight: 800
  },
  userImage: {
    position: "relative",
    margin: "0 11px"
  },
  penIcon: {
    marginLeft: "15px"
  },
  badge: {
    top: "12%",
    right: "25%",
    background: "#8b0000",
    border: "1px solid #ffffff"
  },
  tooltip: {
    fontSize: "13px",
    color: "#ffffff",
    textTransform: "uppercase",
    backgroundColor: "#8b0000",
    height: "23px",
    lineHeight: 1.7,
    "-webkitBoxShadow": "0px 0px 0px 2px #8b0000",
    "-mozBoxShadow": "0px 0px 0px 2px #8b0000",
    boxShadow: "0px 0px 0px 2px #8b0000"
  },
  arrow: {
    "&::before": {
      backgroundColor: "#8b0000"
    }
  },
});
