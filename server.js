const express = require('express');
const app = express();

const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
app.get("/:str", (request, response) => {
    let dateStr = request.params.str;
    let regex = /\D/ig;
    let resDate,result={unix:null,natural:null};
    if(regex.test(dateStr)){
        resDate = new Date(dateStr);
    }else{
        resDate = new Date(parseInt(dateStr)*1000);
    }
    if(!isNaN(resDate.getTime())){
        result= {
            unix:resDate.getTime() / 1000,
            natural:`${months[resDate.getMonth()]} ${resDate.getDate()}, ${resDate.getFullYear()}`
        }
    }
    response.send(result);
})

const listener = app.listen(process.env.PORT||3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`)
})