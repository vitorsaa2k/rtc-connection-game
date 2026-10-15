export interface Question {
  questionId: number;
  question: string;
  options: string[];
}

export const questions = [
  {
    questionId: 1,
    question: "Qual é minha cor favorita?",
    options: [
      "Azul",
      "Vermelho",
      "Verde",
      "Amarelo",
      "Roxo",
      "Rosa",
      "Preto",
      "Branco",
    ],
  },
  {
    questionId: 2,
    question: "Qual é meu gênero de música favorito?",
    options: ["Hip Hop/Rap", "K Pop", "Phonk", "Funk", "Pop", "Rock"],
  },
  {
    questionId: 3,
    question: "Como player1 descreveria player2 em uma palavra",
    options: [
      "Inteligente",
      "Desajeitado(a)",
      "Fofo(a)",
      "Preguiçoso(a)",
      "Lindo(a)",
      "Engraçado(a)",
      "Burro(a)",
    ],
  },
  {
    questionId: 4,
    question: "Qual mês é o meu aniversário?",
    options: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  },
  {
    questionId: 5,
    question: "Qual é meu maior medo?",
    options: [
      "Altura",
      "Escuro",
      "Insetos",
      "Morte",
      "Fracasso",
      "Solidão",
      "Falar em público",
      "Saúde",
    ],
  },
  {
    questionId: 6,
    question: "O que eu quero ser quando crescer?",
    options: [
      "Médico",
      "Professor",
      "Atleta",
      "YouTuber",
      "TI",
      "Policial",
      "Piloto",
      "Advogado",
      "Engenheiro",
    ],
  },
];
