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
						_("fName").innerHTML = resume.FullName;
						_("address").innerHTML = resume.address;
						_("mobile").innerHTML = resume.phoneNumber;
						_("email").innerHTML = resume.emailaddress;
						_("linkedin").innerHTML = resume.linkedin;
						_("github").innerHTML = resume.github;
						_("youtube").innerHTML = resume.youtube;
						_("Summary").innerHTML = resume.Summary;
						_("Skills").innerHTML = ""; 
						for (var i in resume.Skills) {
							_("Skills").innerHTML  += resume.Skills[i].programming + "<br>";
						}
						
						var r = "";
						for (var i in resume.WorkExperience) {

							r += "<h3 class='experiancetitile'>" + resume.WorkExperience[i].Experience + "</h3>";
							for (var j in resume.WorkExperience[i].Responsibilities) {
								r += "<li class='responsibilities'>" +resume.WorkExperience[i].Responsibilities[j] + "</li>";
							}
						}
					_("WorkExperience").innerHTML  = r;
					_("ProjectName").innerHTML = resume.Project;
					_("ProjectDetails").innerHTML = resume.ProjectDetails;
					_("Educationqualifications").innerHTML = ""; 
						for (var e in resume.Education) {
							_("Educationqualifications").innerHTML  += resume.Education[e].Degrees + "<br>";
						}
					_("HubbyInterests").innerHTML = resume.HubbyandInterests; 
				   
                }
				
				
            }
            request.send(null);
            results.innerHTML = "Getting Resume......";
        }