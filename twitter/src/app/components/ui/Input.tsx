
type Props = {
    type: string,
    value?: string,
    onChange?: (newValue: string) => void, 
}

export const Input = ({type, value, onChange}: Props) => {
    return (
        <div>
            <input
                className="text-black" 
                type={type} 
                value={value}
                onChange={e => onChange && onChange(e.target.value)}     
            />

        </div>
    )
}