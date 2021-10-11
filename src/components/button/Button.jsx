import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "../text/Typography";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  contained: {
    backgroundColor: "#0C0B0B",
    color: "white",
    border: "2px solid #0C0B0B",
    borderRadius: 8,
    "&:active": {
      backgoundColor: "#0C0B0B",
    },
    "&:hover": {
      backgoundColor: "#0C0B0B",
    },
  },
  outlined: {
    backgoundColor: "white",
    color: "#0C0B0B",
    border: "2px solid #0C0B0B",
    borderRadius: 8,
    "&:active": {
      backgoundColor: "white",
    },
    "&:hover": {
      backgoundColor: "white",
    },
  },
  text: {
    color: "#0C0B0B",
  },
  buttonRoot: {
    maxHeight: theme.spacing(5),
    textTransform: "none",
  },
}));
const ButtonComponent = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant={props.variant}
      className={clsx(classes.buttonRoot, classes[props.variant])}
      onClick={props.onClick}
      disableRipple
    >
      <Typography
        text={props.text}
        inactive={props.inactive}
        variant={
          props.variant === "text"
            ? "h3"
            : `button${
                props.variant.charAt(0).toUpperCase() + props.variant.slice(1)
              }`
        }
      />
    </Button>
  );
};
export default ButtonComponent;
