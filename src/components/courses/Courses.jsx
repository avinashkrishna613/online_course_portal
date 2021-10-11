import { makeStyles, Grid } from "@material-ui/core";
import { useState } from "react";
import Button from "../button/Button";
import { user } from "../../mockdata/user";
import Course from "./Course";
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
  },
  courseMargin: {
    marginBottom: theme.spacing(2),
  },
}));
const Courses = (props) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const classes = useStyles();
  const getContainer = () => {
    switch (activeTabId) {
      case 0:
        return props.courses
          .filter((course) => !user.currentCourses.includes(course.id))
          .map((course) => (
            <Grid item key={course.id} className={classes.courseMargin}>
              <Course {...course} />
            </Grid>
          ));
      case 3:
        return null;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className={classes.header}>
        <Button
          text={"All Courses"}
          variant="text"
          id={0}
          inactive={!(activeTabId === 0)}
          onClick={() => setActiveTabId(0)}
        />
        <Button
          text={"The Newest"}
          variant="text"
          id={1}
          inactive={!(activeTabId === 1)}
          onClick={() => setActiveTabId(1)}
        />

        <Button
          text={"Top Rated"}
          variant="text"
          id={2}
          inactive={!(activeTabId === 2)}
          onClick={() => setActiveTabId(2)}
        />

        <Button
          text={"Most Popular"}
          variant="text"
          id={3}
          inactive={!(activeTabId === 3)}
          onClick={() => setActiveTabId(3)}
        />
      </div>
      <Grid container>{getContainer()}</Grid>
    </div>
  );
};
export default Courses;
