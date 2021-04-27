

export default function Square(props) {
    return (
        <div className="square" onClick={(e) => props.click(props.index, props.val)} >{props.val}</div>
    )
}