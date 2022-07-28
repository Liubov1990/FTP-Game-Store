export const styles = () => ({
  glanceInfoWrap: {
    display: "flex",
    justifyContent: "space-between",
    color: "#ffffff",
    background: "linear-gradient(45deg, #000000, #800000)",
    padding: "40px 24px"
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
  buttonRoot: {
    width: "180px",
    height: "38px",
    fontFamily: "'Iceland', cursive",
    color: "#ffffff",
    backgroundColor: "#8b0000",
    boxShadow: "none",
    marginTop: "15px",
    "&:hover": {
      color: "#8b0000",
      textDecoration: "none"
    }
  },
  
  "@media (max-width: 768px)": {
    glanceInfoWrap: {
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