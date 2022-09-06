import { IStyles } from "../../types";

export const styles = (): IStyles => ({
  glanceInfoWrap: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    color: "#ffffff",
    background: "linear-gradient(45deg, #000000, #800000)",
  },
  glanceInfoContentWrap: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 24px",
    maxWidth: "1440px",
    width: "100%",
  },
  screenshots: {
    minWidth: "60%",
    marginRight: "3%",
  },
  glance: {
    minWidth: "37%",
    background: "rgba(0.5, 0.5, 0.5, .4)",
    boxSizing: "border-box",
    "&>a:hover": {
      textDecoration: "none"
    }
  },
  glanceInfo: {
    padding: "20px 15px",
    textAlign: "left",
    "&>div": {
      lineHeight: 1.2,
      marginBottom: "5px"
    },
    "& h4": {
      marginRight: "5px"
    },
    "& button": {
      marginTop: "15px",
    },
  },
  info: {
    fontFamily: "Prompt",
    fontSize: "0.75em"
  },
  shortDescription: {
    textAlign: "left",
  },
  linkDecoration: {
    "&:hover": {
      textDecoration: "none"
    }
  },

  "@media (max-width: 768px)": {
    glanceInfoContentWrap: {
      flexDirection: "column"
    },
    screenshots: {
      minWidth: "100%",
      marginRight: 0
    },
    glance: {
      minWidth: "100%"
    },
    glanceInfo: {
      "&>div": {
        lineHeight: 1,
        marginBottom: "5px"
      },
    },
    info: {
      fontSize: "0.6em"
    },
  }
});