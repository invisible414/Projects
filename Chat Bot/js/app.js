function talk(){
	var know={
		"who are you":"Hello,I'm Invisible414",
		"how are you": "Good :)",
		"want to ask something": "What Can I Do For You..?",
		"Please Provide Developer Information": " She is Toshika Ahlawat . She is doing MCA in Computer Applications",
		"Ok":"Thank You So Much :,)",
		"Bye":"Okay! Will meet soon...",
	};
	var user = document.getElementById('userBox').value;
	document.getElementById('chatLog').innerHTML= user + "<br>";
	if (user in know) {
		document.getElementById('chatLog').innerHTML= know[user]+"<br>";
	} else {
		document.getElementById('chatLog').innerHTML="Sorry,I don't Understand <br>";
	}
}
