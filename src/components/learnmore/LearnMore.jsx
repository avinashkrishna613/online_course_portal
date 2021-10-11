import { makeStyles, Grid } from "@material-ui/core";
import Book from "../../assets/book.png";
import Typography from "../text/Typography";
import Button from "../button/Button";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    maxWidth: theme.spacing(55),
    height: theme.spacing(24),
    backgroundColor: "#f5f5f7",
    borderRadius: 14,
    padding: theme.spacing(3),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  }
}));
const LearnMore = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.mainDiv}
    >
      <Grid
        item
        xs={6}
        className={classes.columnFlex}
      >
        <div className={classes.marginBottom}>
          <Typography text={"Learn even more"} variant="h2" />
        </div>
        <div className={classes.marginBottom}>
          <Typography
            text={"Unlock premium features only for $9.99 per month."}
            variant="b1"
          />
        </div>
        <div>
          <Button text="Go Premium" variant="contained" />
        </div>
      </Grid>
      <div>
        <img src={Book} alt="bookIcon" />
      </div>
    </Grid>
  );
};
export default LearnMore;
