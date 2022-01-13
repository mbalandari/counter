// const headerTags = document.querySelectorAll("h1");

// // headerTags.forEach(h1 => {
// //     const hue = 360 * Math.random();
// //     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
// // })

// headerTags.forEach((h1, index) => {
//     h1.innerHTML = "this is tag number " + index;
// })


const TodayData = [20, 30, 50, 6, 4, 2, 5, 20, 24, 32, 40, 59, 68, 89, 100, 112, 109, 101, 78, 56, 32, 31, 12, 1];

// const firstSvg = document.querySelector("svg");

// data.forEach((d, i) => {
//     const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rectTag.setAttribute("x", i * 36);
//     rectTag.setAttribute("y", 150 - d);
//     rectTag.setAttribute("width", 24);
//     rectTag.setAttribute("height", d);

//     firstSvg.append(rectTag);
// })

const todaySvg = d3.select("svg");

const recTags = d3.selectAll("rect")

recTags
    .data(TodayData)
    .attr("width", (d, i) => { return d })
    .attr("y", (d, i) => { return 50 * i })
    .attr("x", 0)
    .attr("height", 40)