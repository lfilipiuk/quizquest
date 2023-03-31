import { FC } from "react";

interface FlashcardProps {
  question: string;
  answer: string;
  status?: "none" | "correct" | "wrong";
}

const QuestionListItem: FC<FlashcardProps> = ({
  question,
  answer,
  status = "none",
}: FlashcardProps) => {
  const getStatusClass = () => {
    switch (status) {
      case "correct":
        return "bg-green-100";
      case "wrong":
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <li
      className={`border border-1 border-gray-400 my-5 rounded-xl p-4 ${getStatusClass()}`}
    >
      <h4 className={"text-center font-semibold mb-2"}>{question}</h4>
      <h4 className={"italic font-normal"}>{answer}</h4>
    </li>
  );
};

export default QuestionListItem;
