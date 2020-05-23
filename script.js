function resetform() {
  document.getElementById('contactinfo').reset();
}
function validateform() {
  var x = document.forms["contactinfo"]["email"].value;
  v

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
  }




}
