document.addEventListener("DOMContentLoaded", function () {
    // Data
    const data = [
      { year: 2005, value: 500.12 },
      { year: 2006, value: 600.45 },
      { year: 2007, value: 700.89 },
      { year: 2008, value: 800.34 },
      { year: 2009, value: 900.56 },
      { year: 2010, value: 1000.78 },
      { year: 2011, value: 850.67 },
      { year: 2012, value: 750.45 },
      { year: 2013, value: 650.32 },
      { year: 2014, value: 550.12 },
      { year: 2015, value: 700.67 },
      { year: 2016, value: 800.45 },
      { year: 2017, value: 900.34 },
      { year: 2018, value: 1007.24 },
    ];
  
    // Dimensions
    const width = 900;
    const height = 500;
    const margin = { top: 10, right: 10, bottom: 50, left: 50 };
  
    // Create SVG
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    // Scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([margin.left, width - margin.right])
      .padding(0.5);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);
  
    // Axes
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(yScale);
  
    // Render Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis);
  
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis);
  
    // Bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - margin.bottom - yScale(d.value));
  });
  