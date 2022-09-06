import { IStyles } from "../../types";

export const styles = (): IStyles => ({
  searchOptions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1440px",
    padding: "38px 24px 30px",
    margin: "0 auto",
    "& .MuiInputBase-root": {
      fontFamily: "Prompt",
    },
  },
  form: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    width: "70%",
    marginBottom: "20px",
  },
  formControl: {
    minWidth: "200px",
    marginRight: "70px",
    "& .MuiFormLabel-root": {
      fontFamily: "Prompt",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#8b0000"
    },
    "& .MuiInput-underline:after": {
      borderColor: "#8b0000"
    },
  },
  rootMenuItem: {
    fontFamily: "Prompt",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "30%",
  },
  
  "@media(max-width: 576px)": {
    form: {
      width: "100%",
      "& .MuiInputBase-root": {
        fontSize: "0.85rem"
      }
    },
    formControl: {
      marginBottom: "10px",
    },
    buttons: {
      width: "100%",
      justifyContent: "flex-start",
    },
  }
});
