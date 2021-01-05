import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as d3 from "d3";

import { getConversation } from '@Selectors/index';

const Graph = () => {
    const { people } = useSelector(getConversation);

    let discussionTime = people.reduce((accumulator, person) => { return parseInt(accumulator + parseInt(person.timeSpoken)) }, [] );

    let props = { data : people.map((person) => {
        return { name: person.name, value: person.timeSpoken, percentage: Math.floor((person.timeSpoken / discussionTime) * 100)};
    })};

    const ref = useRef(null);
    const createPie = d3
      .pie()
      .value(d => d.value)
      .sort(null);
    const createArc = d3.arc().innerRadius(0).outerRadius(200);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
  
    useEffect(
      () => {
        const data = createPie(props.data);
        const group = d3.select(ref.current);
        const groupWithData = group.selectAll("g.arc").data(data);
  
        groupWithData.exit().remove();
  
        const groupWithUpdate = groupWithData
          .enter()
          .append("g")
          .attr("class", "arc");
  
        const path = groupWithUpdate
          .append("path")
          .merge(groupWithData.select("path.arc"));
  
        path
          .attr("class", "arc")
          .attr("d", createArc)
          .attr("fill", (d, i) => colors(i));
  
        const text = groupWithUpdate
          .append("text")
          .merge(groupWithData.select("text"));
  
        text
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "middle")
          .attr("transform", d => `translate(${createArc.centroid(d)})`)
          .style("fill", "white")
          .style("font-size", 18)
          .text(d => { return d.data.name + " " + d.data.percentage + "%" });
      },
      [props.data]
    );
  
    return (
      <svg width={500} height={500}>
        <g
          ref={ref}
          transform={`translate(${250} ${250})`}
        />
      </svg>
    );
  };
  

export default Graph;