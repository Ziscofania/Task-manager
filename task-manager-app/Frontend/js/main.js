// Simula token guardado tras login
const token = localStorage.getItem("token");

// Cargar perfil
fetch("http://localhost:4000/api/auth/profile", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(res => res.json())
  .then(data => {
    document.getElementById("userName").textContent = data.name;
    document.getElementById("userEmail").textContent = data.email;
  })
  .catch(() => {
    alert("Error al cargar el perfil");
  });

// Logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "/login.html"; // si tienes login.html
});
