

type Props = {
    type: string,
    value?: string,
    filled?: boolean,
    send?: boolean,
    placeholder?: string,
    showEyes?: boolean,
    onChange?: (newValue: string) => void, 
    onEnter?: () => void
}

export const Input = ({type, value, filled, placeholder, onChange, onEnter}: Props) => {

    const handleKeyUp = (event: React.KeyboardEvent <HTMLInputElement>) => {
        if(event.code.toLocaleLowerCase() == 'enter' && onEnter) {
            onEnter();
        }
    }


    return (
        <div className={`has-[:focus]:border-white flex items-center h-14 bg-zinc-600 rounded-3xl border-2 border-gray-500 ${filled && 'bg-gray-400'}`}>
            <input
                className="flex-1 outline-none text-gray-400 bg-transparent h-full px-4 "
                type={type} 
                value={value}
                placeholder={placeholder}
                onChange={e => onChange && onChange(e.target.value)}     
                onKeyUp={handleKeyUp}
            
            />

        </div>
    )
}