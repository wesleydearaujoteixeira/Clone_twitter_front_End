

type PropsType = {
    placeholder: string,
    rows: number,
    cols: number,
    value?: string,
    onChange?: (newValue: string) => void,
}

function TextArea({placeholder, rows, cols, value, onChange}: PropsType) {
  
    return (
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
            <textarea className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
            
                onChange={(e) => onChange && onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                value={value}
            
            >


            </textarea>
        </div>
  )
}

export default TextArea