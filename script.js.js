// your code goes here
// Ganti varian dengan tombol keyboard:
// 1 = romantis
// 2 = nyentil
// 3 = jualan
// E = export mode (1080x1920)

document.addEventListener("keydown", (e) => {
  if (["1","2","3"].includes(e.key)) {
    document.body.setAttribute("data-variant", e.key);
  }

  if (e.key.toLowerCase() === "e") {
    document.body.classList.toggle("export");
  }
});
