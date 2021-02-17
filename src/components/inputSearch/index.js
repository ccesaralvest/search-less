function InputSearch({ onChange, value }) { 
    function handleChange(event) {
        console.log(event.target.value);
    }
    
    return ( 
        <input type="text" value={value} onChange={handleChange} />
    )
}

export default InputSearch;