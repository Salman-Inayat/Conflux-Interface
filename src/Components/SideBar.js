/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import SankeyChart from "./SankeyChart";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CONFIRM_EMAIL = gql`
  query {
    confirm_email {
      From
      To
      Weight
    }
  }
`;

const GET_SEARCH = gql`
  query {
    search {
      From
      To
      Weight
    }
  }
`;

const SideBar = () => {
  let data_keys = [[]];
  let data_values = [[]];
  let final_data = [];
  const [labelvalue, setLabelValue] = useState("");
  const [demo, setDemo] = useState();
  const [finalData, setFinalData] = useState([]);

  const [getConfirmEmail, { c_loading, c_error, c_data }] = useLazyQuery(
    GET_CONFIRM_EMAIL,
    {
      onCompleted: (somedata) => {
        let response_data = somedata.confirm_email;
        const parsed_data = JSON.parse(JSON.stringify(response_data));

        data_values = parsed_data.map((x) => Object.values(x));
        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
    }
  );

  const [getSearch, { s_loading, s_error, s_data }] = useLazyQuery(GET_SEARCH, {
    onCompleted: (somedata) => {
      let response_data = somedata.search;
      const parsed_data = JSON.parse(JSON.stringify(response_data));
      data_values = parsed_data.map((x) => Object.values(x));

      for (let x = 0; x < data_values.length; x++) {
        data_values[x].splice([3], 1);
      }

      final_data = data_keys.concat(data_values);
      final_data[0] = ["From", "To", "Weight"];
      console.log(final_data)
      setFinalData(final_data);
    },
  });

  const labels = [
    "confirm_email",
    "search",
    "signup_form",
    "payment_success",
    "product_page",
    "landing",
    "input_email",
    "signup_button",
    "input_password",
    "apply_filters",
    "payment_info",
    "view_more_details",
  ];

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

  function handleChange(event) {
    const clicked_event = event.target.value;
    setLabelValue(clicked_event);
    setDemo("clicked");

    switch (event.target.value) {
      case "confirm_email":
        getConfirmEmail(event.target.value);
        break;
      case "search":
        getSearch(event.target.value);
        break;
      default:
        console.log("select correct option");
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={3} style={{ marginLeft: "50px" }}>
        <Paper style={{ backgroundColor: "#cccccc", padding: "20px " }}>
          <FormLabel style={{ margin: "10px 35px" }}>Select an Event</FormLabel>
          <RadioGroup
            name="spacing"
            aria-label="spacing"
            value={labelvalue}
            onChange={handleChange}
            column="true"
          >
            {labels.map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={value}
                style={{ margin: "-5px 20px", color: "black" }}
              />
            ))}
          </RadioGroup>
        </Paper>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={7} style={{ padding: "50px" }}>
        {demo ? (
          <SankeyChart text={finalData} />
        ) : (
          <SankeyChart text={chartData} />
        )}
      </Grid>
    </Grid>
  );
};

export default SideBar;
