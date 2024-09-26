


type Props = {
    label: string,
    onClick: () => void,
    size: 1 | 2 | 3;
}



export const Button = ({label, size,  onClick}: Props) => {
    return (
        <button 
        onClick={onClick}
        className={`flex justify-center items-center px-2 bg-white text-black font-bold rounded-3xl 
            ${size == 1 && 'h-14 text-lg'}
            ${size == 2 && 'h-10 text-md'} 
            ${size == 3 && 'h-7 text-xs'} `}>
            
            {label}
            
        </button>
    )
}

export const RecomendationSkeleton = () => {
    return (
        <div className="flex items-center">
            <div className=" size-10 mr-2 rounded-full bg-gray-600"></div>
                <div className="flex-1 flex flex-col gap-1 ">
                    <div className="bg-gray-600 w-3/4 h-4"></div>
                    <div className="bg-gray-600 w-1/4 h-4"></div>
                </div>
            </div>
    )
}