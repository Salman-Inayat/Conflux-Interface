import React, { useState, useEffect } from "react";
// import {Grid, Radio, RadioGroup, FormLabel} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import SankeyChart from "./SankeyChart";
import axios from "axios";


const SideBar = () => {
  const [labelvalue, setLabelValue] = useState("confirm_email");
  const [data, setdata] = useState({})

  const labels = [
    "confirm_email",
    "signup_form",
    "payment_success",
    "product_page",
    "search",
    "landing",
    "input_email",
    "signup_button",
    "input_password",
    "apply_filters",
    "payment_info",
    "view_more_details",
  ];

  useEffect( () => {
    console.log(data)
 },
 [data]
 )

  function handleChange(event) {
    setLabelValue(event.target.value);

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            let response_data  = response.data
            setdata(response_data);
        })
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={4} style={{ marginLeft: "20px" }}>
        <Paper>
          <FormLabel style={{margin: "10px 35px"}} color="primary ">Search For</FormLabel>
          <RadioGroup
            name="spacing"
            aria-label="spacing"
            value={labelvalue}
            onChange={handleChange}
            column
          >
            {labels.map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={value}
                style={{margin: "-5px 20px"}}
              />
            ))}
          </RadioGroup>
        </Paper>
      </Grid>
      <Grid item md={7}>
        <SankeyChart text={labelvalue} />
      </Grid>
    </Grid>
  );
};

export default SideBar;
