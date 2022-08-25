export const buttonStyles = () => ({
  buttonRoot: {
    minWidth: "120px",
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
  buttonPadded: {
    marginLeft: "30px"
  },

  "@media(max-width: 576px)": {
    buttonPadded: {
      marginLeft: 0,
      marginRight: "30px"
    }
  }
});
