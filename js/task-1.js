const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categorie => {
    const title = categorie.querySelector("h2").textContent;
    const itemCount = categorie.querySelectorAll("ul > li").length;
    console.log(`Categorie: ${title}`);
    console.log(`Elements: ${itemCount}`);
});
