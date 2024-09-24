

type Props = {
    type: string,
    value?: string,
    filled?: boolean,
    send?: boolean,
    placeholder?: string,
    showEyes?: boolean,
    onChange?: (newValue: string) => void, 
}

export const Input = ({type, value, filled, placeholder, onChange}: Props) => {
    return (
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-400'}`}>
            <input
                className="flex-1 outline-none text-gray-400 bg-transparent h-full px-4"
                type={type} 
                value={value}
                placeholder={placeholder}
                onChange={e => onChange && onChange(e.target.value)}     

            
            />

        </div>
    )
}