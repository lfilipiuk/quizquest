import { FC } from "react";

interface ProgressBarProps {
  progress: {
    status: "correct" | "wrong" | "current" | "not-answered";
    id: any;
  }[];
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }: ProgressBarProps) => {
  const getClassByStatus = (status: string) => {
    switch (status) {
      case "correct":
        return "bg-green-500";
      case "wrong":
        return "bg-red-500";
      case "current":
        return "bg-blue-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className={"flex gap-1 p-0.5"}>
      {progress.map((question) => {
        return (
          <div
            key={question.id}
            data-testid={`progress-item-${question.id}`}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${getClassByStatus(
              question.status
            )}`}
          ></div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
