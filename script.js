const headerTags = document.querySelectorAll("h1");

// headerTags.forEach(h1 => {
//     const hue = 360 * Math.random();
//     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
// })

headerTags.forEach((h1, index) => {
    h1.innerHTML = "this is tag number " + index;
})


const data = [150, 20, 30, 50, 120, 75];

const firstSvg = document.querySelector("svg");

data.forEach((d, i) => {
    const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTag.setAttribute("x", i * 36);
    rectTag.setAttribute("y", 150 - d);
    rectTag.setAttribute("width", 24);
    rectTag.setAttribute("height", d);

    firstSvg.append(rectTag);
})