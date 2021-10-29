import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  inside: {
    color: "#6FB3B8",
    fontFamily: "Bitter",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    margin: "20px",
  },
  Heading: {
    textAlign: "center",
    padding: "20px",
    fontWeight: "bold",
    fontSize: "30px",
  },
  Introduction: {
    padding: "5px",
    textAlign: "center",
    justifyContent: "center",
    margin: "auto",
  },
  parentCenter: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  noDecoration: {
    color: "inherit",
    textDecoration: "inherit",
  },
  Center: {
    textAlign: "center",
    padding: "20px",
  },
}));
