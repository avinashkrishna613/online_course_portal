import { makeStyles, Grid } from "@material-ui/core";
import appInfoIcon from "../../assets/appinfoicon.png";
import homeIcon from "../../assets/home.png";
import profileIcon from "../../assets/profile.png";
import settingsIcon from "../../assets/settings.png";
import degreeIcon from "../../assets/degree.png";
import gmailIcon from "../../assets/mail.png";
import expandIcon from "../../assets/expand.png";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  mainDrawer: {
    backgroundColor: "#0C0B0B",
    borderRadius: 24,
    width: theme.spacing(17),
    height: "100%",
    minHeight: '100vh',
    marginLeft: 32,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  marginTop: {
    marginTop: theme.spacing(7),
    cursor: 'pointer'
  }
}));
const LeftNavigation = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={clsx(classes.mainDrawer)}
    >
      <div>
        <div className={classes.marginTop}>
          <img src={appInfoIcon} alt="appInfo" />
        </div>
        <div className={classes.marginTop}>
          <img src={homeIcon} alt="homeIcon" />
        </div>
        <div className={classes.marginTop}>
          <img src={degreeIcon} alt="degreeicon" />
        </div>
        <div className={classes.marginTop}>
          <img src={profileIcon} alt="profileIcon" />
        </div>
        <div className={classes.marginTop}>
          <img src={gmailIcon} alt="gmailIcon" />
        </div>
        <div className={classes.marginTop}>
          <img src={settingsIcon} alt="settingsIcon" />
        </div>
      </div>
      <div>
        <div>
          <img src={expandIcon} alt="expand" />
        </div>
      </div>
    </Grid>
  );
};
export default LeftNavigation;
