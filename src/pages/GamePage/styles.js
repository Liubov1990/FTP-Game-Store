export const styles = () => ({
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
    "&>div": {
      lineHeight: 1.5,
      marginBottom: "5px"
    }
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
    position: "relative",
    minWidth: "60%",
    minHeight: "450px",
    marginRight: "3%"
  },
  screenshotImage: {
    position: "absolute",
    top: 0,
    left: 0
  },
  systemRequirements: {
    minWidth: "37%",
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
  reviewsSeсtion: {
    maxWidth: "1440px",
    lineHeight: 1.5,
    padding: "40px 24px",
    margin: "0 auto"
  },
  addReviews: {
    display: "flex",
    justifyContent: "space-between"
  },
  review: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    "&>img": {
      width: "40px",
      height: "40px",
      marginRight: "20px"
    },
    "& p": {
      padding: "15px"
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
      marginBottom: "20px",
      marginRight: 0
    },
    systemRequirements: {
      minWidth: "100%"
    },
    similarGames: {
      color: "#8b0000"
    }
  }
});
