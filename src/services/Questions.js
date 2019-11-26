function pergunta(nivel) {
  const perguntas = [
 {
   question: 'Ajude o carro chegar em casa',
   questionImage: 'url da imagem',
   buttonsOpcoes = [
    { id: 0, text: 'CIMA' },
    { id: 1, text: 'BAIXO' },
    { id: 2, text: 'FRENTE' },
    { id: 3, text: 'TRÁS' },
  ],
  resposta = [
    'FRENTE', 'BAIXO', 'CIMA'
  ],
  dificuldade: 1
 },
  {
    question: 'Ajude o carro chegar em casa',
    questionImage: 'url da imagem',
    buttonsOpcoes = [
     { id: 0, text: 'CIMA' },
     { id: 1, text: 'BAIXO' },
     { id: 2, text: 'FRENTE' },
     { id: 3, text: 'FRENTE' },
     { id: 4, text: 'FRENTE' },
     { id: 5, text: 'TRÁS' },
   ],
   resposta = [
    'FRENTE', 'FRENTE', 'FRENTE', 'CIMA'
   ],
   dificuldade: 2
  }
 ];

return perguntas[nivel];

}