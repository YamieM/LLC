const closeLoader = () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("loader_success");
  preloader.classList.remove("loader_unSuccess");
};
window.onload = () => {
  closeLoader();
};