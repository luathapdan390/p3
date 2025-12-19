
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MATCHING = 'MATCHING'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: Option[];
  correctAnswer: string;
}

export interface AnswersState {
  [key: number]: string;
}
