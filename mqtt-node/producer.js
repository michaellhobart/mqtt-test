const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://localhost:1883")
console.log("connected flag  "+client.connected);
client.on("connect", () => {
    console.log("connected  "+client.connected);
    for(var i = 0; i < 20; i++) {
        (function(index) {
            setTimeout(function() { 
                console.log(index);
                if (index % 2 == 0){
                    client.publish("eventopik", `Message number ${index}`)
                } else {
                    client.publish("oddtopik", `Message number ${index}`)
                }
                
            }, index*3000 );
        })(i);
    }
})
client.on("error",function(error){ console.log("Can't connect"+error)})
