const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categorie => {
    const title = categorie.querySelector("h2").textContent;
    const itemCount = categorie.querySelectorAll("ul > li").length;
    console.log(`Categorie: ${title}`);
    console.log(`Elements: ${itemCount}`);
})

const allLists = document.querySelectorAll("ul");
const listCategories = document.querySelector("#categories");
const allListItems = document.querySelectorAll(".item li");
const titles = document.querySelectorAll("h2");

document.body.style.fontFamily = 'Montserrat, sans-serif';

allLists.forEach(item => {
    item.style.listStyle = 'none';
    item.style.padding = '0';
    item.style.margin = '0';
});

listCategories.style.padding = '24px';
listCategories.style.maxWidth = '440px';

categories.forEach(category => {
    category.style.padding = '16px';
    category.style.marginBottom = '24px';
    category.style.background = '#F6F6FE';
    category.style.borderRadius = '8px';
});

allListItems.forEach(item => {
    item.style.border = 'solid #808080 1px'
    item.style.borderRadius = '4px';
    item.style.marginBottom = '8px';
    item.style.padding = '8px 16px';
    item.style.fontSize = '16px';
    item.style.fontWeight = '400';
    item.style.color = '#2E2F42';
    
});

titles.forEach(title => {
    title.style.lineHeight = '32px';
    title.style.fontWeight = '600';
    title.style.fontSize = '24px';
})