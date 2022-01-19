export const styles = () => ({
  searchOptions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1440px",
    padding: "38px 24px 30px",
    margin: "0 auto"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: "15px"
  },
  formControl: {
    minWidth: "200px",
    marginRight: "50px",
    marginBottom: "15px"
  },
  buttonRoot: {
    with: "118px",
    height: "38px",
    fontFamily: "'Gothic A1', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#ffffff",
    backgroundColor: "#8b0000",
    boxShadow: "none",
    "&:hover": {
      color: "#8b0000",
      backgroundColor: "#ffffff"
    }
  }
});