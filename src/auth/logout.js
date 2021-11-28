/* 
    Logout 처리 전반 
*/
function welcomGuestUser() {
  loginDiv.classList.remove("hidden");
  logoutDiv.classList.add("hidden");
}

function logoutAction() {
  localStorage.removeItem("userName");
  welcomGuestUser();
}
