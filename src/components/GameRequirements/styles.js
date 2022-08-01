export const styles = () => ({
  requirements: {
    display: "flex",
    height: "auto",
    background: "linear-gradient(45deg, #000000, #800000)",
    padding: "40px 24px"
  },
  systemRequirementsWrap: {
    width: "100%",
    color: "#ffffff",
    background: "rgba(0.5, 0.5, 0.5, .4)",
    padding: "20px 15px",
    boxSizing: "border-box",
    "&>h2": {
      color: "#ffffff",
      marginRight: "5px",
    },
  },
  systemRequirements: {
    display: "flex",
    justifyContent: "space-between"
  },
  systemRequirementsInfo: {
    textAlign: "left",
    width: "60%",
    marginRight: "3%",
    "&>div": {
      lineHeight: 1.2,
      marginBottom: "5px"
    },
    "& h4": {
      marginRight: "5px"
    },
    "& span": {
      fontFamily: "Prompt",
      fontSize: "0.75em"
    },
  },
  systemRequirementsImage: {
    width: "37%",
    height: "230px",
    background: `url(${'/images/system_requirements.png'})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  
  "@media(max-width: 768px)": {
    systemRequirementsInfo: {
      width: "100%",
      marginRight: 0,
      marginBottom: "20px",
      "&>div": {
        lineHeight: 1,
      },
      "& span": {
        fontSize: "0.6em"
      },
    },
    systemRequirementsImage: {
      display: "none",
    }
  }
});
