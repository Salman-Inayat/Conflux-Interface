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
        data={props.text}
        // rootProps={{ "data-testid": "2" }}
      />
    </Grid>
  );
};

export default SankeyChart;
