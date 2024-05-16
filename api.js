const altura = 86
fetch('https://api.thingspeak.com/channels/2544431/fields/3?api_key=BIQ0SL1NYFAPJB2L')
.then(response=>response.json())
.then(data =>{
    const profundidade = data.feeds[data.feeds.length -1].field3
    const percent = (profundidade / altura) * 100
    console.log(percent.toFixed(2))
})