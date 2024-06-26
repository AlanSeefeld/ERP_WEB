import { SearchGlobal } from "./styles";

function Search({placeholder,value,onChange}){
    return(
        <>
            <SearchGlobal placeholder={placeholder} value={value} onChange={onChange}></SearchGlobal>
        </>
    )
}
export default Search;