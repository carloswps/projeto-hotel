function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-350px";
    } else {
      sidebar.style.right = "0px";
    }
}
  