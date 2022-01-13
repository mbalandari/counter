const todaySvg = d3.select("svg");

const barScale = d3.scaleLinear()
    .domain([0, 2000])
    .range([1, 112])

todaySvg
    .selectAll("rect")
    .data(todayData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => { return i * 36 })
    .attr("y", (d, i) => { return 112 - barScale(d) })
    .attr("width", 24)
    .attr("height", (d, i) => { return barScale(d) })