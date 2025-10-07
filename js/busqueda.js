document.getElementById("buscarInput").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    let items = document.querySelectorAll(".scard h2, .gcard h2, .ecard h2");
  
    items.forEach(item => {
      let texto = item.textContent.toLowerCase();
      if (texto.includes(input)) {
        item.parentElement.style.display = "block";
      } else {
        item.parentElement.style.display = "none";
      }
    });
  });
  