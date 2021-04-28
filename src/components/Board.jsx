import Square from './Square'

export default function Board(props) {
    return (
        <div className="game">
            <div className="turn">{props.stats}</div>
            <div className="board">
                <Square val={props.values[0]} click={props.click} index='0' />
                <Square val={props.values[1]} click={props.click} index='1' />
                <Square val={props.values[2]} click={props.click} index='2' />
                <Square val={props.values[3]} click={props.click} index='3' />
                <Square val={props.values[4]} click={props.click} index='4' />
                <Square val={props.values[5]} click={props.click} index='5' />
                <Square val={props.values[6]} click={props.click} index='6' />
                <Square val={props.values[7]} click={props.click} index='7' />
                <Square val={props.values[8]} click={props.click} index='8' />
            </div>
        </div>
    )
}