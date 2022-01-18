import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// material-ui
import { Radio, RadioGroup, FormControlLabel, FormControl, Button, Link } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { makeStyles } from "@material-ui/core/styles";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Slider() {
  const classes = useStyles();

  const { randomImagesList } = useSelector(state => state.imagesSearchReducer);

  const radioContent = Object.values(randomImagesList).map(item => {
    return {
      id: `${item.id}`,
      label: item.title
    };
  });

  const [activeSlide, setActiveSlide] = React.useState(null);

  useEffect(() => {
    setActiveSlide(`${Object.keys(randomImagesList)[0]}`);
  }, [randomImagesList]);

  const handleChange = event => {
    setActiveSlide(event.target.value);
  };

  return (
    <div className={classes.slider}>
      {Object.keys(randomImagesList).map(id => (
        <div
          key={id}
          className={classes.sliderItem}
          style={{
            backgroundImage: `url(${randomImagesList[activeSlide]?.screenshots[0]?.image})`
          }}
        ></div>
      ))}
      <div className={classes.contentWrapper}>
        <FormControl component="fieldset" className={classes.sliderButtonGroup}>
          <RadioGroup value={activeSlide} onChange={handleChange}>
            {radioContent.map(({ id, label }) => {
              return (
                <FormControlLabel
                  key={id}
                  value={id}
                  control={<Radio />}
                  label={activeSlide === id && label}
                  classes={{ label: classes.label, root: classes.radioRoot }}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <div className={classes.watchNow}>
          <img src="/images/be_a_hero.png" alt="" className={classes.movieLogo} />
          <Link href={randomImagesList[activeSlide]?.game_url} target="_blank">
            <Button variant="contained" classes={{ root: classes.buttonRoot }}>
              Play now
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.sliderBar}>
        <div className={classes.sliderBarContent}>
          <div className={classes.movieInfo}>
            <div>
              Published
              <span>{randomImagesList[activeSlide]?.release_date}</span>
            </div>
          </div>
          <div className={classes.reviewInfo}>
            <div className={classes.likesAmount}>
              <FavoriteBorderOutlinedIcon classes={{ root: classes.svgRoot }} />
              <p>2,548</p>
            </div>
            <div className={classes.commentsAmount}>
              <QuestionAnswerOutlinedIcon classes={{ root: classes.svgRoot }} />
              <p>21</p>
            </div>
            <div className={classes.downloadsAmount}>
              <GetAppOutlinedIcon classes={{ root: classes.svgRoot }} />
              <p>564</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;
