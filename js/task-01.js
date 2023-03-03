const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
