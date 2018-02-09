		function _(elD) {
		  return document.getElementById(elD);
		}
        function display_Resume(){
            var request = new XMLHttpRequest();
            request.open("GET", "json/resume.json", true);
            request.setRequestHeader("Content-type", "application/json", true);
            request.onreadystatechange = function() {
                if(request.readyState == 4 && request.status == 200) {
                    var resume = JSON.parse(request.responseText);
					_("Skills").innerHTML = "";
                    for(var obj in resume){
                        //results.innerHTML += resume[obj].FullName+" is "+resume[obj].age+"<hr />";
						_("fName").innerHTML = resume[obj].FullName;
						_("address").innerHTML = resume[obj].address;
						_("mobile").innerHTML = resume[obj].phoneNumber;
						_("email").innerHTML = resume[obj].emailaddress;
						_("linkedin").innerHTML = resume[obj].linkedin;
						_("github").innerHTML = resume[obj].github;
						_("youtube").innerHTML = resume[obj].youtube;
						_("Summary").innerHTML = resume[obj].Summary;
						//_("Skills").innerHTML = resume[obj].cars[0].models[0];

				   
					for (var i in resume[obj].Skills) {
						_("Skills").innerHTML  += resume[obj].Skills[i].programming + "<br>";
					}
					
					for (var j in resume[obj].Skills) {
							_("Skills").innerHTML  += resume[obj].Skills[i].WebServices[j] + "<br>";
						}
				   }
				   
                }
            }
            request.send(null);
            results.innerHTML = "Getting Resume......";
}