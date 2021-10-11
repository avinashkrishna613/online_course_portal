import { Grid } from "@material-ui/core";
import Profile from "../profile/Profile";
import Courses from "../courses/Courses";
const MiddleContainer = (props) => {
  return (
    <Grid container direction="column">
      <Profile
        {...props.user}
        currentCourse={props.currentCourse}
        courses={props.courses}
        previousCourse={() => props.previousCourseClick()}
        nextCourse={() => props.nextCourseClick()}
      />
      <Courses courses={props.courses} />
    </Grid>
  );
};
export default MiddleContainer;
