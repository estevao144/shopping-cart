export async function getCategories() {
  // Implemente aqui
  const retornaAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const retornaJson = await retornaAPI.json();
  return retornaJson;
}

export async function getProductsFromCategoryAndQuery(id, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`;
  const retornaAPI = await fetch(url);
  const retornaJson = await retornaAPI.json();
  return retornaJson;
}

export async function getProductById(id) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const url = `https://api.mercadolibre.com/items/${id}`;
  const retornaAPI = await fetch(url);
  const retornaJson = await retornaAPI.json();
  return retornaJson;
}

export async function getProductByName(name) {
  // Implemente aqui
  const retornaAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${name}`);
  const retornaJson = await retornaAPI.json();
  return retornaJson;
}
