import {FC} from "react";

interface ProgressBarProps {
    progress: {
        status: 'correct' | 'wrong' | 'current' | 'not-answered';
        id: any;
    }[]
}

const ProgressBar : FC<ProgressBarProps> = ({progress} : ProgressBarProps) => {

    return (
        <div className={'flex gap-1 p-0.5'}>
            {progress.map((question) => {
                return (
                    <div
                        key={question.id}
                        className={`h-3 w-3 rounded-full transition-all duration-200 ${question.status === 'correct' ? 'bg-green-500' : question.status === 'wrong' ? 'bg-red-500' : question.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'}`}
                    >
                    </div>
                )
            })
            }
        </div>
    )
}

export default ProgressBar;