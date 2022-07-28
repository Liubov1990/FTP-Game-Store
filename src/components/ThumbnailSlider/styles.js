export const styles = () => ({
  thumbnailSlider: {
    // start reactCarouselOverride
    "& .thumbs-wrapper": {
      marginBottom: 0
    },
    "& .carousel .thumb": {
      padding: 0,
      border: "none",
      borderRadius: "4px",
      marginTop: "1px",
    },
    "& .carousel .thumb:nth-child(1)": {
      marginLeft: "1px",
    },
    "& .carousel .thumbs .selected": {
      boxSizing: "border-box",
      outline: "1px solid #ffffff",
    },
    "& .carousel .thumbs img": {
      maxHeight: "45px",
    },
    // end reactCarouselOverride
  },
  resizedImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    minHeight: "500px",
  },

  "@media (min-width: 2560px)": {
    resizedImage: {
      minHeight: "750px"
    }
  },

  "@media (max-width: 768px)": {
    thumbnailSlider: {
      "& .thumbs-wrapper": {
        marginBottom: "30px",
      },
    },
    resizedImage: {
      minHeight: "300px",
      height: "auto",
    },
  },

  "@media (max-width: 426px)": {
    resizedImage: {
      minHeight: "200px"
    },
  }
});