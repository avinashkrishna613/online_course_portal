import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: 36,
    fontFamily: "Baloo Bhai",
    color: "#0C0B0B",
    fontWeight: "bold",
  },
  h2: {
    fontSize: 24,
    fontFamily: "Baloo Bhai",
    color: "#0C0B0B",
    fontWeight: "bold",
  },
  h3: {
    fontSize: 16,
    fontFamily: "Baloo Bhai",
    color: "#0C0B0B",
    fontWeight: "bold",
  },
  buttonOutlined: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#0C0B0B",
  },
  buttonContained: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#FFFFFF",
  },
  caption: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#0C0B0B",
  },
  b1: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#0C0B0B",
  },
  bigNumber: {
    fontSize:64
  },
  disabled: {
    opacity: 0.3,
  },
}));
const TypographyComponent = (props) => {
  const classes = useStyles();
  return (
    <Typography
      className={clsx(
        classes[props.variant],
        { ...props.classNames },
        props.inactive && classes.disabled
      )}
      {...props}
    >
      {props.text}
    </Typography>
  );
};
export default TypographyComponent;
