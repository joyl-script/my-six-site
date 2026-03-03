export const Button = (props) => {
    return (
        <button onClick={props.click} className={props.class}>{props.text}</button>
    )
}