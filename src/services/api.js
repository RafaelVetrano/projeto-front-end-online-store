export async function getCategories() {
  const response = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();
  return response;
}
