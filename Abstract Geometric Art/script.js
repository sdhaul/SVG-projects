// script.js
document.addEventListener("DOMContentLoaded", () => {
    function createSVG(id, width, height, content){
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", id);
        svg.setAttribute("height", height);
        svg.setAttribute("width", width);
        svg.innerHTML = content;
        return svg;
    }
    // SVG content for the first SVG
    const svgContent1 = `
        <circle cx="400" cy="300" r="100" fill="url(#grad1)" />
        <defs>
            <linearGradient id="grad1" x1="0%" x2="0%" y1="100%" y2="100%">
                <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
                <stop offset="0%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
            </linearGradient>
        </defs>
    `;

    // SVG content for the second SVG
    const svgContent2 = `
        <rect x="100" y="100" width="200" height="200" fill="green" />
    `;

    // Get the container for the SVGs
    const svgContainer = document.getElementById("svg-container");

    // Create both the SVGs and append them to the character
    const svg1 = createSVG("svg1", 800, 600, svgContent1);
    const svg2 = createSVG("svg2", 800, 600, svgContent2);

    svgContainer.appendChild(svg1);
    svgContainer.appendChild(svg2);


    // Initialise Viewbox for both the SVGs
    let viewBoxX = 0;
    let viewBoxY = 0;
    let viewBoxWidth = 800;
    let viewBoxHeight = 600;

    // Set initial view box for SVGs
    svg1.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
    svg2.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);

    // Function to update the viewBox for both SVGs
    function updateBox(){
        svg1.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
        svg2.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
    }

    // Event listener for keydown to navigate the SVGs
    window.addEventListener("keydown", (event)=>{
        const step = 50; // Set size for navigation
        switch(event.key){
            case "ArrowUp":
                viewBoxY -= step;
                break;
            case "ArrowDown":
                viewBoxY += step;
                break;
            case "ArrowLeft":
                viewBoxX -= step;
                break;
            case "ArrowRight":
                viewBoxX += step;
                break;
        }

        // Update the view box of the SVGs
        updateBox();
    });
    

});