import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Typography from "../text/Typography";
import Button from "../button/Button";
import Rating from "../../assets/rating.png";
import Duration from "../../assets/duration.png";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: "100%",
    minWidth: theme.spacing(77.5),
    minHeight: theme.spacing(10),
    backgroundColor: "#f5f5f7",
    borderRadius: 14,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(3),
  },
  iconPlaceholder: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: "#ffffff",
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexDisplay: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  courseInfoText: {
    display: "flex",
    flexDirection: "column",
    alignItems: " start",
  },
}));
const CourseComponent = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.mainDiv}
    >
      <div className={classes.iconPlaceholder}>
        <img src={props.url} alt="alt text"/>
      </div>
      <div className={classes.courseInfoText}>
        <Typography variant="h3" text={props.name} />
        <Typography variant="caption" text={props.author} />
      </div>
      <div className={classes.flexDisplay}>
        <img src={Duration} alt="duration" className={classes.icon} />
        <Typography variant="caption" text={props.duration} />
      </div>
      <div className={classes.flexDisplay}>
        <img src={Rating} alt="rating" className={classes.icon} />
        <Typography variant="caption" text={props.rating} />
      </div>
      <div>
        <Button text={"view course"} variant={'outlined'} />
      </div>
    </Grid>
  );
};
export default CourseComponent;
