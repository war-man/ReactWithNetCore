export interface QuestionData {
  questionId: number,
  title: string,
  content: string,
  userName: string,
  created: Date,
  answers: AnswerData[]
}

export interface AnswerData {
  answerId: number,
  content: string,
  userName: string,
  created: Date
}

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: 'Why should I learn TypeScript?',
    content: `TypeScript seems to be getting popular so I wondered whether
      it is worth my time tearning it? What benefits does it give over JS?`,
    userName: 'Bob',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'To catch problems earlier speeding up your developments',
        userName: 'Jane',
        created: new Date(),
      },
      {
        answerId: 2,
        content: 'So, that you can use JavaScript features of tomorrow, today',
        userName: 'Fred',
        created: new Date(),
      },
    ]
  },
  {
    questionId: 2,
    title: 'Which state managment tool should I use?',
    content: `Which one should I use?`,
    userName: 'Bob',
    created: new Date(),
    answers: []
  },
]

export const getUnansweredQuestions = (): QuestionData[] => {
  return questions.filter(q => q.answers.length === 0);
}