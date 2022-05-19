export const styles = () => ({
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
    "@media (max-width: 768px)": {
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
  