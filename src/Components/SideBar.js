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
  const [data, setData] = useState([[]]);
  const [demo, setDemo] = useState();

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

  // useEffect(() => {
  //   // console.log(data);
  // }, [data]);

  const chartData = [
    ["From", "To", "Weight"],
    ["demo", "signup_form", 4],
    ["demo", "product_page", 5],
    ["demo", "search", 7],

    ["signup_form", "landing", 2],
    ["signup_form", "imput_email", 1],
    ["signup_form", "view_more_details", 1],
    ["product_page", "apply_filters", 1],
    ["product_page", "payment_info", 3],
    ["product_page", "view_more_details", 1],
    ["search", "payment_info", 1],
    ["search", "view_more_details", 1],
    ["search", "payment_success", 2],
    ["search", "landing", 3],
    ["landing", "apply_filters", 1],
    ["landing", "input_password", 3],
    ["payment_info", "input_password", 3],
    ["payment_info", "input_email", 3],
    ["view_more_details", "apply_filters", 1],
  ];

    let data_keys = [[]]
    let data_values = []
    let final_data = []

  function handleChange(event) {
    const clicked_event = event.target.value;
    setLabelValue(clicked_event);
    setDemo("clicked");

    axios
      .get("http://localhost:3001/" + clicked_event)
      .then(function (response) {
        let i;
        let response_data = response.data;

        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_keys[0].push(Object.keys(parsed_data[0][0]))

        for (i = 0; i < parsed_data[0].length; i++) {
          data_values.push(Object.values(parsed_data[0][i]))
        }

        final_data  = data_keys.concat(data_values)
        // final_data = data_values
        final_data[0] = ["From", "To", "Weight"]
        setData(final_data)

      });
      

    //   function arrayToJSONObject (arr){
    //     var keys = arr[0];
    //     var newArr = arr.slice(1, arr.length);

    //     var formatted = [],
    //     data = newArr,
    //     cols = keys,
    //     l = cols.length;
    //     for (var i=0; i<data.length; i++) {
    //             var d = data[i],
    //                     o = {};
    //             for (var j=0; j<l; j++)
    //                     o[cols[j]] = d[j];
    //             formatted.push(o);
    //     }
    //     return formatted;
    // }

    //   const return_object = arrayToJSONObject(chartData);
    //   console.log(return_object)

    //   axios
    //   .post("http://localhost:3001/demo", return_object)
    //   .then(function (response) {
    //     console.log("posted")
    //   });
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={4} style={{ marginLeft: "20px" }}>
        <Paper>
          <FormLabel style={{ margin: "10px 35px" }} color="primary ">
            Search For
          </FormLabel>
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
                style={{ margin: "-5px 20px" }}
              />
            ))}
          </RadioGroup>
        </Paper>
      </Grid>
      <Grid item md={7}>
        {demo ? <SankeyChart text={data} /> : <SankeyChart text={chartData} />}
      </Grid>
    </Grid>
  );
};

export default SideBar;
