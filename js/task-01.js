const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
                  const titleTag = item.getElementsByTagName("h2");
                  console.log(`Category: ${titleTag[0].textContent}`);
                  const categoriesList = item.getElementsByTagName('li');
                  console.log(`Elements: ${categoriesList.length}`);
});