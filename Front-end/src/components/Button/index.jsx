import { ButtonGlobal } from "./styles";

function Button({ children, onClick }) {
    return (
        <ButtonGlobal onClick={onClick}>
            {children}
        </ButtonGlobal>
    );
}

export default Button;
