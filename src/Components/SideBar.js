/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import SankeyChart from "./SankeyChart";
import { gql, useLazyQuery } from "@apollo/client";

export const GET_CONFIRM_EMAIL = gql`
  query {
    confirm_email {
      From
      To
      Weight
    }
  }
`;

export const GET_SEARCH = gql`
  query {
    search {
      From
      To
      Weight
    }
  }
`;

export const GET_SIGNUP_FORM = gql`
  query {
    signup_form {
      From
      To
      Weight
    }
  }
`;

export const GET_PAYMENT_SUCCESS = gql`
  query {
    payment_success {
      From
      To
      Weight
    }
  }
`;

export const GET_PRODUCT_PAGE = gql`
  query {
    product_page {
      From
      To
      Weight
    }
  }
`;

export const GET_LANDING = gql`
  query {
    landing {
      From
      To
      Weight
    }
  }
`;

export const GET_INPUT_EMAIL = gql`
  query {
    input_email {
      From
      To
      Weight
    }
  }
`;

export const GET_SIGNUP_BUTTON = gql`
  query {
    signup_button {
      From
      To
      Weight
    }
  }
`;

export const GET_INPUT_PASSWORD = gql`
  query {
    input_password {
      From
      To
      Weight
    }
  }
`;

export const GET_APPLY_FILTERS = gql`
  query {
    apply_filters {
      From
      To
      Weight
    }
  }
`;

export const GET_PAYMENT_INFO = gql`
  query {
    payment_info {
      From
      To
      Weight
    }
  }
`;

export const GET_VIEW_MORE_DETAILS = gql`
  query {
    view_more_details {
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
      onCompleted: (data) => {
        let response_data = data.confirm_email;
        const parsed_data = JSON.parse(JSON.stringify(response_data));

        data_values = parsed_data.map((x) => Object.values(x));
        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getSearch, { s_loading, s_error, s_data }] = useLazyQuery(GET_SEARCH, {
    onCompleted: (data) => {
      let response_data = data.search;
      const parsed_data = JSON.parse(JSON.stringify(response_data));
      data_values = parsed_data.map((x) => Object.values(x));

      for (let x = 0; x < data_values.length; x++) {
        data_values[x].splice([3], 1);
      }

      final_data = data_keys.concat(data_values);
      final_data[0] = ["From", "To", "Weight"];
      setFinalData(final_data);
    },
    // onError: () => {
    //   var myAnchor = document.getElementById("error-div");
    //   myAnchor.style.display = "block"
    // }
  });

  const [getSignupForm, { sf_loading, sf_error, sf_data }] = useLazyQuery(
    GET_SIGNUP_FORM,
    {
      onCompleted: (data) => {
        let response_data = data.signup_form;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getPaymentSuccess, { ps_loading, ps_error, ps_data }] = useLazyQuery(
    GET_PAYMENT_SUCCESS,
    {
      onCompleted: (data) => {
        let response_data = data.payment_success;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getProductPage, { pp_loading, pp_error, pp_data }] = useLazyQuery(
    GET_PRODUCT_PAGE,
    {
      onCompleted: (data) => {
        let response_data = data.product_page;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getLanding, { l_loading, l_error, l_data }] = useLazyQuery(
    GET_LANDING,
    {
      onCompleted: (data) => {
        let response_data = data.landing;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getInputEmail, { ie_loading, ie_error, ie_data }] = useLazyQuery(
    GET_INPUT_EMAIL,
    {
      onCompleted: (data) => {
        let response_data = data.input_email;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getSignupButton, { sb_loading, sb_error, sb_data }] = useLazyQuery(
    GET_SIGNUP_BUTTON,
    {
      onCompleted: (data) => {
        let response_data = data.signup_button;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getInputPassword, { ip_loading, ip_error, ip_data }] = useLazyQuery(
    GET_INPUT_PASSWORD,
    {
      onCompleted: (data) => {
        let response_data = data.input_password;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getApplyFilters, { af_loading, af_error, af_data }] = useLazyQuery(
    GET_APPLY_FILTERS,
    {
      onCompleted: (data) => {
        let response_data = data.apply_filters;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getPaymentInfo, { pi_loading, pi_error, pi_data }] = useLazyQuery(
    GET_PAYMENT_INFO,
    {
      onCompleted: (data) => {
        let response_data = data.payment_info;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
    }
  );

  const [getViewMoreDetails, { vmd_loading, vmd_error, vmd_data }] =
    useLazyQuery(GET_VIEW_MORE_DETAILS, {
      onCompleted: (data) => {
        let response_data = data.view_more_details;
        const parsed_data = JSON.parse(JSON.stringify(response_data));
        data_values = parsed_data.map((x) => Object.values(x));

        for (let x = 0; x < data_values.length; x++) {
          data_values[x].splice([3], 1);
        }

        final_data = data_keys.concat(data_values);
        final_data[0] = ["From", "To", "Weight"];
        setFinalData(final_data);
      },
      // onError: () => {
      //   var myAnchor = document.getElementById("error-div");
      //   myAnchor.style.display = "block"
      // }
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
      case "signup_form":
        getSignupForm(event.target.value);
        break;
      case "payment_success":
        getPaymentSuccess(event.target.value);
        break;
      case "product_page":
        getProductPage(event.target.value);
        break;
      case "landing":
        getLanding(event.target.value);
        break;
      case "input_email":
        getInputEmail(event.target.value);
        break;
      case "signup_button":
        getSignupButton(event.target.value);
        break;
      case "input_password":
        getInputPassword(event.target.value);
        break;
      case "apply_filters":
        getApplyFilters(event.target.value);
        break;
      case "payment_info":
        getPaymentInfo(event.target.value);
        break;
      case "view_more_details":
        getViewMoreDetails(event.target.value);
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
      <p id="error-div" style={{ display: "none" }}>
        Error
      </p>
    </Grid>
  );
};

export default SideBar;
