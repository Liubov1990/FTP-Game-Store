export const errorStyles = () => ({
  error: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/page_not_found.png'})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "calc(100vh - 76px)",
  }
});
