import { InputInfo } from "./styles";

function Input({ value, onChange, placeholder }) {
    return (
        <InputInfo value={value} onChange={onChange} placeholder={placeholder} />
    );
}

export default Input;
