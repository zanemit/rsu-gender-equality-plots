// Example function to draw a plot
function makeLinePlot(containerId, data, group, labelMapping, hoverUnit = "darbinieki", yAxisTitle = "Darbinieku %") {
    let added_string = labelMapping[group] || "";
    
    const totals = data[group].total;
    const meanTotal = totals.reduce((a, b) => a + b, 0) / totals.length;
    const markerSizes = totals.map(n => 160 + (((n / meanTotal) - 1) * 400));
    
    const trace = {
        x: data[group].x.map(String),
        y: data[group].y,
        mode: "lines+markers",
        name: data[group].name,
        marker: {
            size: markerSizes,
            sizemode: "area",
            opacity: 0.5,
            color: "#8e1719",
            line: {width:1, color:"#cccccc"}
        },
        line: {width:4, color:"#8e1719"},
        customdata: data[group].total,
        hovertemplate: `%{y:.0f}% sievietes<br>%{customdata} ${hoverUnit}<extra></extra>`
    };
    
    const layout = {
        title: {text: `Sieviešu % ${added_string} vidū`, font: {size:18, family:"Arial, sans-serif", color:"#000"}},
        xaxis: {title:{text:"Gads", font:{size:18, family:"Arial, sans-serif"}}, tickfont:{size:18, family:"Arial, sans-serif"}, type:'category'},
        yaxis: {title:{text:yAxisTitle, font:{size:18, family:"Arial, sans-serif"}}, tickfont:{size:18, family:"Arial, sans-serif"}, range:[0,100]}
    };
    
    Plotly.react(containerId, [trace], layout, {responsive:true});
}
