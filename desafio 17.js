const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'pacman.png' },
    { nome: 'Mario Bros', imagem: 'supermario.png' },
    { nome: 'Pitfall', imagem: 'pitfall.webp' },
    { nome: 'Enduro', imagem: 'enduro.jpg' },
    { nome: 'Donkey Kong', imagem: 'donkeykong.png' },
    { nome: 'Galaxy', imagem: 'galaxy.png' },
    { nome: 'Tennis', imagem: 'tennis.png' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});