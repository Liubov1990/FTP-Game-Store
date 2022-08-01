export const styles = () => ({
  parallax: {
    backgroundImage: `url(${'/images/parallax_bg.jpg'})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  description: {
    maxWidth: "1440px",
    fontWeight: 800,
    textShadow: "2px 0 2px white",
    lineHeight: 1.3,
    padding: "40px 24px",
    margin: "0 auto"
  },
  
  "@media(max-width: 768px)": {
    descriptionText: {
      fontSize: "0.75em"
    }
  },
});