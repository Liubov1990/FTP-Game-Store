export const styles = () => ({
  frontImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    minHeight: "350px",
    marginBottom: "30px",
  },
  thumbnailImages: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    // width: "100%",
    // height: "120px",
    height: "100%",
    margin: "0 30px 0 25px",
    boxSizing: "border-box",
    overflow: "hidden"
  },
  thumbnailImage: {
    // display: "flex",
    // width: "25%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "160px",
    minWidth: "160px",
    height: "90px",
    borderRadius: "4px",
    margin: "0 10px"
  },
  activeThumbnailImage: {
    border: "2px solid white",
    boxSizing: "border-box"
  },
  controls: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    "& .MuiSvgIcon-root": {
      fill: "white"
    }
  },
  prevBtn: {
    position: "absolute",
    top: "-60px"
  },
  nextBtn: {
    position: "absolute",
    top: "-60px",
    right: "-5px"
  },
  "@media (min-width: 2560px)": {
    frontImage: {
      minHeight: "750px"
    }
  },
  "@media (min-width: 1440px)": {
    controls: {
      // display: "none"
    },
    thumbnailImages: {
      justifyContent: "center"
    }
  },
  "@media (max-width: 768px)": {
    frontImage: {
      minHeight: "300px",
      height: "auto"
    },
    thumbnailImages: {
      marginRight: "20px",
      marginLeft: "15px",
      marginBottom: "20px"
    },
    thumbnailImage: {
      // minWidth: "148px",
      minWidth: "110px",
      height: "70px",
      marginRight: "5px",
      marginLeft: "5px"
    },
    prevBtn: {
      top: "-75px"
    },
    nextBtn: {
      top: "-75px"
    }
  },
  "@media (max-width: 425px)": {
    frontImage: {
      minHeight: "200px"
    }
  }
});
