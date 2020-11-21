function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Username Tidak Boleh Kosong');
		return false;
	}
	else if (pass.length < 5){
		alert('Password Kurang Dari 5');
		return false;
	}
	else if (user == "Gisela" && pass == "pradealpa"){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Username / Password Anda Salah, Coba Lagi");
	}
		
}