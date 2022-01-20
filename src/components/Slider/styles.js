export const styles = () => ({
  slider: {
    position: "relative",
    width: "100%",
    minHeight: "500px"
  },
  sliderItem: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "500px",
    transition: "all 1s ease-in"
  },

  contentWrapper: {
    maxWidth: "1440px",
    margin: "0 auto"
  },

  sliderButtonGroup: {
    position: "absolute",
    top: "175px",
    left: "30px",
    zIndex: 100,
    "& .MuiSvgIcon-root": {
      fill: "#edeff0",
      width: "10px",
      height: "10px",
      background: "#edeff0",
      borderRadius: "50%"
    },
    "& .MuiFormControlLabel-root": {
      height: "20px",
      marginBottom: "9px",
      "& .MuiIconButton-label .MuiSvgIcon-root:last-child": {
        color: "#8b0000"
      }
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "transparent",
      background: "url(./images/dot.png) center no-repeat",
      width: "20px",
      height: "20px",
      left: "-3px",
      marginRight: "2px",
      "& .MuiIconButton-label": {
        display: "none"
      }
    }
  },
  label: {
    fontFamily: "'Gothic A1', sans-serif",
    color: "#ffffff",
    background: "rgba(0,0,0,.5)",
    borderRadius: "4px",
    boxShadow: "7px 6px 7px rgba(0,0,0,.5)",
    padding: "0 5px",
    marginLeft: "4px"
  },
  radioRoot: {
    color: "#ffffff"
  },
  watchNow: {
    position: "absolute",
    top: "165px",
    right: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "310px",
    "& > a:hover": {
      textDecoration: "none"
    }
  },
  movieLogo: {
    width: "300px",
    height: "100px",
    display: "inline-block"
  },
  buttonRoot: {
    width: "118px",
    height: "38px",
    fontFamily: "'Gothic A1', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#ffffff",
    backgroundColor: "#8b0000",
    textDecoration: "none",
    boxShadow: "none",
    "&:hover": {
      color: "#8b0000",
      textDecoration: "none",
    }
  },
  sliderBar: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "49px",
    height: "49px",
    position: "absolute",
    bottom: 0,
    textTransform: "uppercase",
    fontSize: "14px",
    color: "#ffffff",
    borderTop: "1px solid rgba(115,115,115, 0.2)",
    background: "rgba(0,0,0,.5)",
    zIndex: 100,
    padding: "0 24px",
    boxSizing: "border-box",
    overflow: "hidden"
  },
  sliderBarContent: {
    width: "1440px",
    display: "flex",
    justifyContent: "space-between"
  },
  movieInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&>div": {
      marginRight: "25px"
    },
    "&>div>span": {
      color: "#8b0000",
      marginLeft: "10px"
    }
  },
  reviewInfo: {
    display: "flex",
    justifyContent: "space-between",
    "&>div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "25px"
    }
  },
  svgRoot: {
    fill: "#8b0000",
    marginRight: "10px"
  }
});
