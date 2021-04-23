import React from "react";
import Chart from "react-google-charts";
import Grid from '@material-ui/core/Grid';

const SankeyChart = (props) => {
  return (
    <Grid item md={9}>
      <Chart
        width={600}
        height={"300px"}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        // options={{
        //   sankey: {
        //     link: { color: { fill: '#d799ae' } },
        //     node: {
        //       colors: ['#a61d4c'],
        //       label: { color: '#871b47' },
        //     },
        //   },
        // }}
        data={[
          ["From", "To", "Weight"],
          ["confirm_email", "signup_form", 5],
          ["confirm_email", "product_page", 1],
          ["confirm_email", "search", 7],

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
         
        ]}
        rootProps={{ "data-testid": "2" }}
      />
      <p>{props.text}</p>
    </Grid>
  );
};

export default SankeyChart;
