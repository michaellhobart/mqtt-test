const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://localhost:1883")

var topic_s="eventopik";

client.subscribe(topic_s,{qos:1});

client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});