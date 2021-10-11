import { makeStyles, Grid } from "@material-ui/core";
import Typography from "../text/Typography";
import Button from "../button/Button";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import clsx from "clsx";
import user from "../../assets/user.png";
import { CircularProgressbar } from "react-circular-progressbar";

const useStyles = makeStyles((theme) => ({
  nameDiv: {
    width: "100%",
    minWidth: theme.spacing(77.5),
    maxHeight: theme.spacing(20),
    backgroundColor: "#f5f5f7",
    borderRadius: 14,
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  currentCourseDiv: {
    backgroundColor: "#f5f5f7",
    borderRadius: 14,
    height: theme.spacing(10),
    width: theme.spacing(62.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(3),
  },
  iconPlaceholder: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: "#ffffff",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  courseInfoText: {
    display: "flex",
    flexDirection: "column",
    alignItems: " start",
  },
  icon: {
    cursor: "pointer",
  },
  flexDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginRight: {
    marginRight: theme.spacing(3),
  },
  marginBottom: {
    marginBottom: theme.spacing(3),
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const currentCourseDetails = props.courses.filter(
    (course) => course.id === props.currentCourse.id
  );
  return (
    <div>
      <div className={classes.nameDiv}>
        <div style={{ paddingLeft: 32 }}>
          <Typography text={`Hello ${props.name}`} variant="h1" />
          <Typography text={`It’s good to see you again.`} variant="b2" />
        </div>
        <div>
          <img src={user} alt="user" />
        </div>
      </div>
      <div className={clsx(classes.flexDisplay, classes.marginBottom)}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.currentCourseDiv}
        >
          <div className={classes.iconPlaceholder}>
            <img src={currentCourseDetails[0].url} alt="altText" />
          </div>
          <div className={classes.courseInfoText}>
            <Typography variant="h3" text={currentCourseDetails[0].name} />
            <Typography
              variant="caption"
              text={currentCourseDetails[0].author}
            />
          </div>
          <div
            className={classes.flexDisplay}
          >
            <CircularProgressbar value={100} text={`100%`} />
          </div>
          <div className={classes.flexDisplay}></div>
          <div>
            <Button text={"Continue"} variant={"contained"} />
          </div>
        </Grid>
        <Grid spacing={3}>
          <img
            src={leftArrow}
            className={clsx(classes.icon, classes.marginRight)}
            alt="leftarrow"
            onClick={props.previousCourse}
          />
          <img
            src={rightArrow}
            onClick={props.nextCourse}
            className={classes.icon}
            alt="rightarrow"
          />
        </Grid>
      </div>
    </div>
  );
};
export default Profile;
