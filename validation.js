function validation(){
			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var atposition = email.indexOf('@');
			var dotposition = email.lastIndexOf(".");
			var phone = document.getElementById('phone').value;
			var msg = document.getElementById('msg').value;


			if(name == ""){
				document.getElementById('username').innerHTML =" ** Please fill the username field";
				return false;
			}

			if(email == "" || (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) ){
				document.getElementById('emailids').innerHTML =" ** Invalid Email";
				return false;
			}
		/*	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
				document.getElementById('emailids').innerHTML =" **Invalid Email ID";
				return false;
			} */
			if(phone == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile Number field";
				return false;
			}
			if(isNaN(phone)){
				document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
				return false;
			}
			if(phone.length!=10){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
				return false;
			}
			if(msg == ""){
				document.getElementById('message').innerHTML =" ** Please fill the Message field";
				return false;
			}
		}