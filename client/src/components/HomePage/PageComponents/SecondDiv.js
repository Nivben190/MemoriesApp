import * as React from "react";
import CardForHomePage from "./CardForHomePage";
import { Fade } from "react-reveal";
import { Grid } from "@material-ui/core";
import styles from "./secondDiv.module.css";
const SecondDiv = () => {
  return (
    <div style={{ background: "black" }}>
      <Fade middle>
        <h1 className={styles.joinUs_h1}>Join Us To A Journy In Memory Lane</h1>
      </Fade>
      <div className={styles.secondDiv_HomePage}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <CardForHomePage
              text="All Your Memories In One Place"
              p="all your memories stored in one place, easy accesses and use"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardForHomePage
              text="All Your Memories In One Place"
              p="all your memories stored in one place, easy accesses and use"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardForHomePage
              text="All Your Memories In One Place"
              p="all your memories stored in one place, easy accesses and use"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SecondDiv;
