// Toggle class active (memunculkan nav utama lewat hamburger menu)
const navbarNav = document.querySelector(".navbar-nav");
// ketika di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Bisa klik diluar hamburger untuk menyembunyikan nav utama
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
//jadi selama yang ditekan bukan menu dan nav utama maka jalankan event (menyembuyikan nav utama)
