// --- Today SVG ---
const todaySvg = d3.select("svg.today");

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

todaySvg
    .selectAll("text")
    .data(todayData)
    .enter()
    .append("text")
    .attr("x", (d, i) => { return i * 36 + 12 })
    .attr("y", 130)
    .text((d, i) => { return i })


// --- Month SVG ---
const monthSvg = d3.select("svg.month");

const raduisScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range([0, 50])

monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => { return (i % 7) * 120 + 60 })
    .attr("cy", (d, i) => { return Math.floor(i / 7) * 100 + 60 })
    .attr("r", 0)
    .transition()
    .duration(1000)
    .delay((d, i) => { return i * 20 + 200 })
    .ease(d3.easeCubicIn)
    .attr("r", (d, i) => { return raduisScale(d) })