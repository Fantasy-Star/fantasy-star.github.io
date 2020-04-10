document.addEventListener("DOMContentLoaded", () => {
  const pattern = Trianglify({
    palette: ["YlGnBu", "GnBu", "Purples", "Blues"],
  });
  const canvas = document.createElement("canvas");
  canvas.classList.add("trianglify-bg");
  document.body.appendChild(pattern.canvas(canvas));
});
