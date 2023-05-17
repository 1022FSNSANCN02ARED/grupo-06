const products = document.querySelectorAll(".catalogue-product");

products.forEach((product) => {
    product.addEventListener("mouseover", () => {
        product.classList.add("catalogue-bg-shadow");
    })
    product.addEventListener("mouseleave", () => {
        product.classList.remove("catalogue-bg-shadow");
    })
})