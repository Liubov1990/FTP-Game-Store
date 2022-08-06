export const styles = () => ({
  slider: {
    position: "relative",
    width: "100%",
    height: "425px",
    // start reactCarouselOverride
    "& .carousel-root .carousel .control-dots": {
      top: "145px",
      width: "auto",
      display: "flex",
      flexDirection: "column",
    },
    // end reactCarouselOverride
  },
  indicatorStyles: {
    background: "#fff",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    outline: "2px solid #8b0000",
    padding: "5px",
    margin: "7px 7px 7px 24px",
    cursor: "pointer",
    "&.active": {
      background: "#000"
    },
  },
    sliderItem: {
    maxHeight: "425px",
  },
  contentWrapper: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  indicatorWrap: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    color: "#ffffff",
    width: "100%",
    background: "rgba(0,0,0,.5)",
    borderRadius: "4px",
    boxShadow: "7px 6px 7px rgba(0,0,0,.5)",
    whiteSpace: "nowrap",
    padding: "5px",
    marginLeft: "7px",
  },
  playNow: {
    position: "absolute",
    top: "145px",
    right: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "310px",
    zIndex: "1000",
    "& > a:hover": {
      textDecoration: "none"
    }
  },
  gameLogo: {
    width: "300px",
    height: "100px",
    display: "inline-block"
  },
  buttonRoot: {
    width: "118px",
    height: "38px",
    fontFamily: "'Iceland', cursive",
    color: "#ffffff",
    backgroundColor: "#8b0000",
    textDecoration: "none",
    boxShadow: "none",
    "&:hover": {
      color: "#8b0000",
      textDecoration: "none"
    }
  },
  sliderBar: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "49px",
    height: "49px",
    textTransform: "uppercase",
    fontSize: ".75em",
    color: "#ffffff",
    background: "rgba(0, 0, 0, .7)",
    overflow: "hidden",
    padding: "0 24px",
    boxSizing: "border-box",
    zIndex: 100,
  },
  sliderBarContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "1440px",
  },
  publicationInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    lineHeight: 0.7,
  },
  published: {
    marginRight: "10px"
  },
  releaseDate: {
    fontWeight: 900,
    textShadow: "1px 1px 1px #000000",
    color: "#8b0000",
    marginTop: "0"
  },
  platformStatusInfoWrap: {
    display: "flex",
  },
  platformStatusInfo: {
    display: "flex",
    alignItems: "center",
    marginLeft: "25px"
  },
  svgRoot: {
    fill: "#8b0000",
    marginRight: "10px"
  },
  
  "@media(max-width: 768px)": {
    slider: {
      height: "240px",
      "& .carousel-root .carousel .control-dots": {
        top: "45px",
      },
    },
    sliderItem: {
      maxHeight: "240px"
    },
    title: {
      fontSize: ".7em",
    },
    playNow: {
      top: "40px",
      width: "200px"
    },
    gameLogo: {
      width: "200px",
      height: "75px"
    },
    sliderBar: {
      fontSize: ".6em",
    },
    releaseDate: {
      display: "inline-block",
      marginTop: "5px"
    },
    platformStatusInfo: {
      lineHeight: "1",
      marginLeft: "10px"
    },
    svgRoot: {
      width: "0.75em",
      height: "0.75em",
      marginRight: "5px"
    }
  },

  "@media(max-width: 426px)": {
    slider: {
      height: "170px",
      marginBottom: "45px",
      "& .carousel-root .carousel .control-dots": {
        top: "0",
        marginTop: "10px",
      },
    },
    sliderItem: {
      maxHeight: "170px"
    },
    playNow: {
      top: "unset",
      bottom: "10px",
      left: "24px",
      width: "118px",
      marginTop: "5px",
      marginBottom: "5px",
    },
    gameLogo: {
      display: "none",
    },
    sliderBar: {
      bottom: "-45px",
      background: "#000000"
    },
    sliderBarContent: {
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    platformStatusInfo: {
      marginLeft: 0,
      marginRight: "10px",
    },
    svgRoot: {
      width: "0.65em",
      height: "0.65em",
    }
  }
});
