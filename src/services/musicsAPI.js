// O código abaixo foi retirado do projeto Trybetunes da escola de programação Trybe.
// Toda a função abaixo foi feita pelas pessoas instrutoras da Trybe e já veio pronta no início do projeto.

const getMusics = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  return requestJson.results;
};

export default getMusics;
