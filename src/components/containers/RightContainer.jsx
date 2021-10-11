import {
  Grid,
  makeStyles,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import CourseSummay from "../courses/CourseSummary";
import GraphPlot from "../chart/GraphPlot.jsx";
import LearnMore from "../learnmore/LearnMore";
import NotificationIcon from "../../assets/notification.png";
import Search from "../../assets/searchicon.png";
import UserIcon from "../../assets/usericon.png";
const useStyles = makeStyles((theme) => ({
  inputBase: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  },
  searchDiv: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F5F7;",
    "&:hover": {
      backgroundColor: "#F5F5F7;",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(1),
    paddingBottom: 0,
  },
  marginRight: {
    marginRight: 24,
  },
}));
const RightContainer = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ width: 450 }}>
      <Grid item container style={{ height: 160, width: "100%" }}>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <div className={classes.searchDiv}>
                <img
                  src={Search}
                  className={classes.searchIcon}
                  alt="searchicon"
                />
                <InputBase className={classes.inputBase} />
              </div>
            </Grid>
            <Grid item xs container>
              <Grid item>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <img src={NotificationIcon} alt="notificationIcon" />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                >
                  <img src={UserIcon} alt="usericon" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <CourseSummay
            count={props.completedCourses.length}
            info={"Courses completed"}
            classes={classes.marginRight}
          />
          <CourseSummay count={props.currentCourses.length} info={"Courses in progress"} />
        </Grid>
      </Grid>

      <Grid item>
        <GraphPlot />
      </Grid>
      <Grid item>
        <LearnMore />
      </Grid>
    </Grid>
  );
};
export default RightContainer;
