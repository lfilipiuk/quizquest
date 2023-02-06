import {FC} from "react";

interface ProgressBarProps {
    progress: {
        status: 'correct' | 'wrong' | 'current' | 'not-answered';
        id: any;
    }[]
}

const ProgressBar : FC<ProgressBarProps> = ({progress} : ProgressBarProps) => {

    const size = 100 / progress.length;

    return (
        <div className={'w-full h-6 flex bg-white gap-0.5 p-0.5'}>
            {progress.map((question) => {
                return (
                    <div
                        key={question.id}
                         style={{width:`${size}%`}}
                        className={`h-full transition-all duration-200 ${question.status === 'correct' ? 'bg-green-500' : question.status === 'wrong' ? 'bg-red-500' : question.status === 'current' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    >
                    </div>
                )
            })
            }
        </div>
    )
}

export default ProgressBar;