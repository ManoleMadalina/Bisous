/*const categories = document.querySelectorAll(".category-animation");
observer = new IntersectionObserver((entries) => {
  console.log(categories);
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `category-animation1 1.5s  ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
categories.forEach((category) => {
  observer.observe(category);
});*/

//Aparitie produse
$(".intro-category").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".products").removeClass("active").eq(position).addClass("active");

  $siblings.removeClass("active");
  $this.addClass("active");
});

const products = document.querySelectorAll(".products");

products.forEach((product, index) => {
  if (product.style.animation) {
    product.style.animation = "";
  } else {
    product.style.animation = `productsFade 0.8s ease forwards`;
  }
});

/*
const toggleClass = () => {
  const icons = document.querySelectorAll(".intro-category");
  const products = document.querySelectorAll(".products");

  for (var index = 0; index < icons.length; index++) {
    icons[index].addEventListener("click", () => {
      products.classList.toggle("active");
    });
  }
};

toggleClass();*/
