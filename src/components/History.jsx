

export default function History(props) {
    let setText = (i) => i === 0 ? 'Start of the Game' : 'Go back to move ' + i
    return (
        <button className='historyButton' onClick={() => props.click(props.currentState)}>{setText(props.index)}</button>
    )
}