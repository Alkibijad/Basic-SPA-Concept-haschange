let createView = {
  home: () => {
    return "<h1>This is a Home View</h1>";
  },
  product: () => {
    return "<h1>This is a Product View</h1>";
  },
  about: () => {
    return "<h1>This is a About View</h1>";
  },
  contact: () => {
    return "<h1>This is a Contact View</h1>";
  },
};

let sections = document.querySelectorAll("section");
window.addEventListener("hashchange", () => {
  let viewId = location.hash.substring(1);

  sections.forEach((section) => {
    if (viewId === section.id) {
      section.style.display = "block";
      section.innerHTML = createView[viewId]();
    } else {
      section.style.display = "none";
    }
  });
});
