import { IStyles } from "../../types/index.js";
import { sixCols, fourCols, fourColsSlim, threeCols } from "../../constants/gridCols";

export const styles = (): IStyles => ({
  gridContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: sixCols,
    gridAutoRows: "120px",
    gridAutoFlow: "dense",
    color: "#ffffff",
    background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(139, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",
    padding: "10px 24px",
    "&.error": {
      gridTemplateColumns: "none",
      alignItems: "center",
      justifyContent: "center",
    },
    "&>div:nth-of-type(1)": {
      gridColumn: "startline / 3"
    },
    "&>div:nth-of-type(4)": {
      gridColumn: "5 / endline",
      gridRow: "1 / 3"
    },
    "&>div:nth-of-type(7)": {
      gridColumn: "3 / 5"
    },
    "&>div:nth-of-type(10)": {
      gridColumn: "3 / 5"
    },
    "&>div:nth-of-type(13)": {
      gridColumn: "startline / 3",
      gridRow: "4 / 6"
    },
    "&>div:nth-of-type(14)": {
      gridColumn: "5 / endline"
    },
    "&>div:nth-of-type(19)": {
      gridColumn: "5 / endline"
    },
    "&>div:nth-of-type(22)": {
      gridColumn: "midline / endline"
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
      gridTemplateColumns: fourCols,
      "&>div:nth-of-type(4)": {
        gridColumn: "auto",
        gridRow: "auto"
      },
      "&>div:nth-of-type(6)": {
        gridColumn: "midline / endline"
      },
      "&>div:nth-of-type(7)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(9)": {
        gridColumn: "midline / endline"
      },
      "&>div:nth-of-type(10)": {
        gridColumn: "startline / 3",
        gridRow: "4 / 6"
      },
      "&>div:nth-of-type(13)": {
        gridColumn: "midline / endline",
        gridRow: "auto"
      },
      "&>div:nth-of-type(14)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(16)": {
        gridColumn: "midline / endline"
      },
      "&>div:nth-of-type(19)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(21)": {
        gridColumn: "startline / midline"
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
      gridTemplateColumns: fourColsSlim,
      gridAutoRows: "90px"
    }
  },

  "@media(max-width: 768px)": {
    gridContainer: {
      gridTemplateColumns: threeCols,
      gridAutoRows: "60px",
      "&>div:nth-of-type(6)": {
        gridColumn: "startline / 3",
        gridRow: "3 / 5"
      },
      "&>div:nth-of-type(9)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(10)": {
        gridColumn: "2 / endline",
        gridRow: "5 / 7"
      },
      "&>div:nth-of-type(13)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(16)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(18)": {
        gridColumn: "startline / endline",
        gridRow: "9 / 10"
      },
      "&>div:nth-of-type(21)": {
        gridColumn: "auto"
      },
      "&>div:nth-of-type(23)": {
        gridColumn: "2 / endline"
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