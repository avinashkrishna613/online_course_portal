import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Typography from "../text/Typography";
const useStyles = makeStyles((theme) => ({
  flexDisplay: {
    display: "flex",
    justifyContent: "space-between",
    justifyItems: 'center',
    alignItems: "center",
  },
  mainDiv: {
    maxWidth: theme.spacing(26),
    maxHeight: theme.spacing(12),
    borderRadius: 14,
    backgroundColor: "#f5f5f7",
  },
}));
const CourseSummay = (props) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.mainDiv, classes.flexDisplay, props.classes)}
    >
      <Typography text={props.count} variant="bigNumber" />
      <Typography text={props.info} variant="b1" />
    </div>
  );
};
export default CourseSummay;
