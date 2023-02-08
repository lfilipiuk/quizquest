import {
  FC,
  Key,
} from "react";

import QuestionListItem from "./QuestionListItem";

interface FlashcardListProps {
  deck: [];

}

interface FlashcardItem {
  id: Key;
  question: string;
  answer: string;
  status?: string | undefined;
}

const QuestionList: FC<FlashcardListProps> = ({ deck }: FlashcardListProps) => {

  if (!deck) return <div>Loading...</div>;

  return (
    <ul className={"mx-auto max-w-2xl"}>
      {deck.map((flashcard: FlashcardItem) => (
        <QuestionListItem
          key={flashcard.id}
          question={flashcard.question}
          answer={flashcard.answer}
          status={flashcard.status? flashcard.status : "none"}
        />
      ))}
    </ul>
  );
};

export default QuestionList;
