export const styles = () => ({
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 76px)"
  },
  root: {
    alignSelf: "center",
  },
  colorPrimary: {
    color: "rgba(0, 0, 0, .5)",
  },
  gameInfo: {
    width: "100%",
    textAlign: "justify",
    margin: "0 auto"
  },
  shortDetails: {
    display: "flex",
    justifyContent: "space-between",
    color: "#ffffff",
    background: "linear-gradient(45deg, #000000, #800000)",
    padding: "40px 24px"
  },
  videoWrapper: {
    minWidth: "60%",
    height: "auto",
    marginRight: "3%",
    boxSizing: "border-box",
    "&>video": {
      minWidth: "100%"
    },
    "&>p": {
      marginTop: "15px"
    }
  },
  image: {
    width: "100%",
    height: "auto"
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
      lineHeight: 1.5,
      marginBottom: "5px"
    }
  },
  shortDescription: {
    textAlign: "justify"
  },
  description: {
    maxWidth: "1440px",
    lineHeight: 1.5,
    padding: "40px 24px",
    margin: "0 auto"
  },
  requirements: {
    display: "flex",
    justifyContent: "space-between",
    height: "auto",
    background: "linear-gradient(45deg, #000000, #800000)",
    padding: "40px 24px"
  },
  screenshots: {
    display: "flex",
    flexDirection: "column",
    minWidth: "60%",
    // minHeight: "450px",
    height: "auto",
    marginRight: "3%"
  },
  systemRequirements: {
    minWidth: "37%",
    textAlign: "left",
    color: "#ffffff",
    background: "rgba(0.5, 0.5, 0.5, .4)",
    padding: "20px 15px",
    boxSizing: "border-box",
    "&>h2": {
      color: "#ffffff"
    },
    "&>div": {
      lineHeight: 1.5,
      marginBottom: "5px"
    }
  },
  similarGames: {
    maxWidth: "1440px",
    lineHeight: 1.5,
    padding: "40px 24px",
    margin: "0 auto"
  },
  chipRoot: {
    fontFamily: '"Gothic A1", sans-serif',
    fontSize: "16px",
    lineHeight: "24px",
    color: " #3f444e",
    marginRight: "15px",
    marginBottom: "15px"
  },
  linkDecoration: {
    "&:hover": {
      textDecoration: "none"
    }
  },
  buttonRoot: {
    width: "180px",
    height: "38px",
    fontFamily: "'Gothic A1', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#ffffff",
    backgroundColor: "#8b0000",
    boxShadow: "none",
    "&:hover": {
      color: "#8b0000",
      textDecoration: "none"
    }
  },
  "@media (max-width: 768px)": {
    shortDetails: {
      flexDirection: "column"
    },
    videoWrapper: {
      minWidth: "100%",
      marginBottom: "20px",
      marginRight: 0
    },
    glance: {
      minWidth: "100%"
    },
    requirements: {
      flexDirection: "column"
    },
    screenshots: {
      minWidth: "100%",
      // minHeight: "450px",
      // marginBottom: "20px",
      marginRight: 0
    },
    systemRequirements: {
      minWidth: "100%"
    }
  }
});
