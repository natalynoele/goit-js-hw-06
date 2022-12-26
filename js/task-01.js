const categoriesEl = document.querySelector(".categories");
c
console.log(`Number of categories: ${categories.children.length}`);
categories.forEach(item => {
                  console.dir(item);
                  console.log(`Category: ${item.firstElementChild.textContent}`);
                  console.log(`Elements: ${item.lastElementChild.children.length}`);                 
});