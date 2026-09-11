function saveUser(name,email,password){
  localStorage.setItem("tup_user",JSON.stringify({
    name:name,
    email:email,
    password:password
  }));
}

function signup(e){
  e.preventDefault();
  saveUser(name.value,email.value,password.value);
  location.href="login.html";
}

function login(e){
  e.preventDefault();

  const u=JSON.parse(
    localStorage.getItem("tup_user") || "null"
  );

  if(u && u.email===email.value && u.password===password.value){
    localStorage.setItem("tup_auth","1");
    location.href="trading.html";
  }else{
    alert("Demo login: create an account first or use the same details.");
  }
}

function googleDemo(){
  localStorage.setItem("tup_auth","1");
  location.href="trading.html";
}
