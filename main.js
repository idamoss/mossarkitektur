document.addEventListener("DOMContentLoaded", async () => {
    const blocks = document.querySelectorAll("[data-include]");
  
    for (const el of blocks) {
      const file = el.getAttribute("data-include");
      const res = await fetch(file, { cache: "no-store" });
      el.innerHTML = await res.text();
    }
  });

  