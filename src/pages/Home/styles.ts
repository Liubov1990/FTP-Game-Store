import { IStyles } from "../../types";

export const styles = (): IStyles => ({
  buttonUp: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "36px",
    height: "36px",
    background: "rgba(0, 0, 0, .5)",
    borderRadius: "4px",
    cursor: "pointer",
    opacity: 0,
    zIndex: 1000,
    transition: "all .5s",
    "& svg": {
        position: "absolute",
        top: "5px",
        left: "6px",
        color: "#ffffff",
    }
  },
  toShow: {
    opacity: 1
  }
});
