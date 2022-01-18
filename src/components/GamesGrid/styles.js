export const styles = () => ({
  gridContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(6, minmax(200px, 1fr))",
    gridAutoRows: "120px",
    gridAutoFlow: "dense",
    background: "rgb(0,0,0)",
    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(139,0,0,1) 50%, rgba(0,0,0,1) 100%)",
    padding: "10px 24px",
    "&>div:nth-of-type(1)": {
      gridColumn: "1 / 3"
    },
    "&>div:nth-of-type(4)": {
      gridColumn: "5 / 7",
      gridRow: "1 / 3"
    },
    "&>div:nth-of-type(7)": {
      gridColumn: "3 / 5"
    },
    "&>div:nth-of-type(10)": {
      gridColumn: "3 / 5"
    },
    "&>div:nth-of-type(13)": {
      gridColumn: "1 / 3",
      gridRow: "4 / 6"
    },
    "&>div:nth-of-type(14)": {
      gridColumn: "5 / 7"
    },
    "&>div:nth-of-type(19)": {
      gridColumn: "5 / 7"
    },
    "&>div:nth-of-type(22)": {
      gridColumn: "4 / 7"
    }
  },
  gridItem: {
    position: "relative",
    "&:hover": {
      backgroundSize: "115% !important",
      transition: "all 0.5s",
      cursor: "pointer",
      "& $gameName": {
        display: "block"
      }
    }
  },
  gameName: {
    display: "none",
    position: "absolute",
    content: "",
    width: "100%",
    height: "auto",
    top: 0,
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 1,
    color: "#ffffff",
    background: "rgba(0, 0, 0, .5)",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    padding: "4px 0",
    zIndex: 100
  },
  "@media(max-width: 1440px)": {
    gridContainer: {
      gridTemplateColumns: "repeat(4, minmax(130px, 1fr))",
      "&>div:nth-of-type(4)": {
        gridColumn: "auto",
        gridRow: "auto"
      },
      "&>div:nth-of-type(6)": {
        gridColumn: "3 / 5"
      },
      "&>div:nth-of-type(7)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(9)": {
        gridColumn: "3 / 5"
      },
      "&>div:nth-of-type(10)": {
        gridColumn: "1 / 3",
        gridRow: "4 / 6"
      },
      "&>div:nth-of-type(13)": {
        gridColumn: "3 / 5",
        gridRow: "auto"
      },
      "&>div:nth-of-type(14)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(16)": {
        gridColumn: "3 / 5"
      },
      "&>div:nth-of-type(19)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(21)": {
        gridColumn: "1 / 3"
      },
      "&>div:nth-of-type(20)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(22)": {
        gridColumn: "auto"
      }
    }
  },
  "@media(max-width: 1024px)": {
    gridContainer: {
      gridTemplateColumns: "repeat(4, minmax(110px, 1fr))",
      gridAutoRows: "90px"
    }
  },
  "@media(max-width: 768px)": {
    gridContainer: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoRows: "65px",

      "&>div:nth-of-type(6)": {
        gridColumn: "1 / 3",
        gridRow: "3 / 5"
      },
      "&>div:nth-of-type(9)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(10)": {
        gridColumn: "2 / 4",
        gridRow: "5 / 7"
      },
      "&>div:nth-of-type(13)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(16)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(18)": {
        gridColumn: "1 / 4",
        gridRow: "9 / 10"
      },
      "&>div:nth-of-type(21)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(23)": {
        gridColumn: "2 / 4"
      }
    },
    "@media(max-width: 425px)": {
      gridContainer: {
        gridTemplateColumns: "1fr",
        gridAutoRows: "150px",

        "&>div:nth-of-type(1)": {
          gridColumn: "auto",
          gridRow: "auto"
        },
        "&>div:nth-of-type(6)": {
          gridColumn: "auto",
          gridRow: "auto"
        },
        "&>div:nth-of-type(10)": {
          gridColumn: "auto",
          gridRow: "auto"
        },
        "&>div:nth-of-type(18)": {
          gridColumn: "auto",
          gridRow: "auto"
        },
        "&>div:nth-of-type(23)": {
          gridColumn: "auto"
        }
      }
    }
  }
});
