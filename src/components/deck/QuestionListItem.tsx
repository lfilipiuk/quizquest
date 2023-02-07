import { FC } from "react";

interface FlashcardProps {
  question: string;
  answer: string;
  status?: string;
}

const QuestionListItem: FC<FlashcardProps> = ({
  question,
  answer,
  status,
}: FlashcardProps) => {
  return (
    <li
      className={`border border-1 border-gray-400 my-5 rounded-xl p-4 ${
        status === "correct"
          ? "bg-green-100"
          : status === "wrong"
          ? "bg-red-100"
          : "bg-gray-100"
      }`}
    >
      <h4 className={"text-center font-semibold mb-2"}>{question}</h4>
      <h4 className={"italic font-normal"}>{answer}</h4>
    </li>
  );
};

export default QuestionListItem;
