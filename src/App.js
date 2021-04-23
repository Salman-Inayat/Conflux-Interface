import React from "react";
import SideBar from "./Components/SideBar";
import Grid from "@material-ui/core/Grid";
import Header from "./Components/Header";
// import Customer_Card from "./Components/Customer_Card"

const App = () => {
  return (
      <Grid container spacing={2}>
        <Grid md = {12} xs={12}>
          <Header/>
        </Grid>
        <Grid md={12}>
          <SideBar />
        </Grid>
        {/* <Grid md={8}>
        <SankeyChart />
        </Grid> */}
        {/* <Grid md={12}>
        <Customer_Card/>
        </Grid> */}
      </Grid>
  );
};

export default App;
