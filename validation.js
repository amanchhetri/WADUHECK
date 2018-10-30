function validation(){
			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var atposition = email.indexOf('@');
			var dotposition = email.lastIndexOf(".");
			var phone = document.getElementById('phone').value;
			var msg = document.getElementById('msg').value;


			if(name == ""){
				document.getElementById('username').innerHTML =" ** Please fill the Username field";

				return false;
			}

			else{document.getElementById('username').innerHTML ="";
				}
				

			if (!/^[a-zA-Z]*$/g.test(name)) {
			        document.getElementById('username').innerHTML=" ** Please enter Alphabets for Name";
			        return false;
			    }




			if(phone == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile Number field";
				return false;
			}
			else{document.getElementById('mobileno').innerHTML ="";}

			if(isNaN(phone)){
				document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
				return false;
			}
			else{document.getElementById('mobileno').innerHTML ="";}

			if(phone.length!=10){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
				return false;
			}
			else{document.getElementById('mobileno').innerHTML ="";}

			if(email == "" || atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length ){
				document.getElementById('emailids').innerHTML =" ** Invalid Email";
				return false;
			}
			else{document.getElementById('emailids').innerHTML ="";}

			if(msg == ""){
				document.getElementById('message').innerHTML =" ** Please fill the Message field";
				return false;
			}
			else{document.getElementById('message').innerHTML ="";}
		}
