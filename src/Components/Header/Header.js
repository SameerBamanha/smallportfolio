import React from "react";
import ReactRoundedImage from "react-rounded-image";
import { Grid } from "@material-ui/core";
import cover from "./Cover.jpg";
import useStyles from "./styles";
import "./header.css";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.inside}>
      <div className={classes.image}>
        <ReactRoundedImage
          image={cover}
          roundedSize="0"
          imageWidth="300"
          imageHeight="300"
        />
      </div>
      <div className={classes.Heading}>
        Hi, I am Chitra Rekha Bamanha<span className="wave">👋</span>
      </div>
      <Grid container>
        <Grid item xs={6} md={8} className={classes.Introduction}>
          I am an Astrologer, an Engineer and an avid learner, In my free time I
          love to read and learn. I am currently doing M.A in Sanskrit language.
          If you wish to discuss about astronomy feel free to connect with me.
        </Grid>
      </Grid>
      <div className={classes.parentCenter}>
        <a
          href="mailto:chitrarekhabamanha@gmail.com"
          className={classes.noDecoration}
        >
          <div style={{ padding: "20px" }}>
            <SiGmail size={28} />
          </div>
        </a>
        <div style={{ padding: "20px" }}>
          <a href="https://wa.me/8770159268" className={classes.noDecoration}>
            <BsWhatsapp size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
