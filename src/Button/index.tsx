type Props = {
    onClick: () => void;
    buttonText: string;
}

export const Button: React.FC<Props> = ({onClick, buttonText}) => {

    return <button onClick={onClick}>{buttonText}</button>;
};
