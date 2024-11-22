const gameGrid = document.querySelector('.game-grid');

// Array com os dados dos jogos
const jogos = [
    { nome: 'Pac-Man', imagem: 'pac-man.jpg' },
    { nome: 'Mario Bros', imagem: 'mario-bros.jpg' },
    { nome: 'Pitfall', imagem: 'Modelo 2.png' },
    { nome: 'Enduro', imagem: 'morris.webp' },
    { nome: 'Donkey Kong', imagem: 'mario-bros.jpg' },
    { nome: 'Galaxy', imagem: 'mario-bros.jpg' },
    { nome: 'Tennis', imagem: 'mario-bros.jpg' },  
    // ... outros jogos
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    // ... código para criar cada div com a imagem e o nome do jogo
}

// Preenchendo a grade
jogos.forEach(jogo => {gameGrid.appendChild(criarGameBox(jogo));
});