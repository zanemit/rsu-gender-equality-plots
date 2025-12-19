function makeLinePlot(containerId, data, group, labelMapping, {
                                                titlePrefix="Sieviešu %",
                                                titleSuffix="vidū",
                                                hoverWomen="sievietes",
                                                hoverUnit="darbinieki", 
                                                yAxisTitle="Darbinieku %"
                                            }) {
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
        hovertemplate: `%{y:.0f}% ${hoverWomen}<br>%{customdata} ${hoverUnit}<extra></extra>`
    };
    
    const layout = {
        title: {text: `${titlePrefix} ${added_string} ${titleSuffix}`, font: {size:18, family:"Arial, sans-serif", color:"#000"}},
        xaxis: {tickfont:{size:18, family:"Arial, sans-serif"}, type:'category'},
        yaxis: {title:{text:yAxisTitle, font:{size:18, family:"Arial, sans-serif"}}, tickfont:{size:18, family:"Arial, sans-serif"}, range:[0,100]}
    };
    
    Plotly.react(containerId, [trace], layout, {responsive:true});
}

function makeBarPlot(containerId, data, group, {femaleHoverName, maleHoverName, plotTitle, ylabel}) {
      const female_trace = {
        x: data[group].x.map(String),
        y: data[group].female,
        type: "bar",
        name: `${femaleHoverName}`,
        marker: {
          color: "#8e1719"
        },
        hovertemplate: `%{y:.0f} EUR`
      };

      const male_trace = {
        x: data[group].x.map(String),
        y: data[group].male,
        type: "bar",
        name: `${maleHoverName}`,
        marker: {
          color: "#808080"
        },
        hovertemplate: `%{y:.0f} EUR`
      };

      const layout = {
        barmode: 'group',  // this makes bars side-by-side
        bargroupgap: 0.1, // gap between within-group
        title: {text: `${plotTitle}`, font: { size: 18, family: "Arial, sans-serif" }},
        xaxis: {tickfont: {size: 14}},
        yaxis: {title: {text: `${ylabel} (EUR)`, font: {size: 16}}, tickfont: {size: 14}, range: [0, 1700]}
    };
      Plotly.react(containerId, [female_trace, male_trace], layout, {responsive: true});
    }


function populateSelect(selectId, labels, defaultValue) {
    const select = document.getElementById(selectId);
    select.innerHTML = ""; // clear existing options

    Object.entries(labels).forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
    });

    if (defaultValue) {
        select.value = defaultValue;
    }
}

function subsetLabelsByData(data, labels) {
    return Object.fromEntries(
        Object.keys(data)
        .filter(key => labels[key])   
        .map(key => [key, labels[key]])
    );
}
