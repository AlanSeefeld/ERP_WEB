import { SelectGlobal } from "./style";

function SelectsGlobal({children,onClick}){

    return(
        <>
        <SelectGlobal
                onClick={onClick}>
             {children}
        </SelectGlobal>
        </>
    )
}
export default SelectsGlobal;  