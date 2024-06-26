import { InputInfo } from "./styles";

function Input({ value, onChange, placeholder,type }) {
    return (
        <InputInfo type={type} value={value} onChange={onChange} placeholder={placeholder} />
    );
}

export default Input;
