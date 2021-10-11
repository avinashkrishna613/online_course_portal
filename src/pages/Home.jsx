import { Grid, makeStyles } from "@material-ui/core";
import { user } from "../mockdata/user";
import { courses } from "../mockdata/courses";
import LeftNavigation from "../components/navigation/LeftNavigation";
import clsx from "clsx";
import { useState } from "react";
import RightContainer from "../components/containers/RightContainer";
import MiddleContainer from "../components/containers/MiddleContainer";

const useStyles = makeStyles((theme) => ({
  marginRight: {
    marginRight: 24,
  },
  infoDiv: {
    maxWidth: theme.spacing(77.5),
  },
}));
const Home = (props) => {
  const classes = useStyles();
  const [currentCourse, setCurrentCourse] = useState(user.currentCourses[0]);
  const previousCourseClick = () => {
    let index = user.currentCourses.findIndex(
      (course) => course.id === currentCourse.id
    );
    const len = user.currentCourses.length - 1;
    if (index === 0) {
      index = len;
    } else {
      index = index - 1;
    }
    setCurrentCourse(user.currentCourses[index]);
  };
  const nextCourseClick = () => {
    let index = user.currentCourses.findIndex(
      (course) => course.id === currentCourse.id
    );
    const len = user.currentCourses.length - 1;
    if (index === len) {
      index = 0;
    } else {
      index = index + 1;
    }
    setCurrentCourse(user.currentCourses[index]);
  };
  return (
    <Grid container>
      <Grid item className={classes.marginRight}>
        <LeftNavigation />
      </Grid>
      <Grid item xs className={clsx(classes.marginRight, classes.infoDiv)}>
        <MiddleContainer
          courses={courses}
          nextCourseClick={nextCourseClick}
          previousCourseClick={previousCourseClick}
          user={user}
          currentCourse={currentCourse}
        />
      </Grid>
      <Grid item>
        <RightContainer {...user} />
      </Grid>
    </Grid>
  );
};
export default Home;
