import { useState } from 'react'
import Square from './Square'

export default function Board(props) {
    let [turn, setTurn] = useState('X')
    let [val, setVal] = useState(new Array(9).fill(' '))
    let [status, setStatus] = useState(['Player X\'s turn', true])
    let changeVal = (index, value) => {
        if (value === ' ' && status[1]) {
            let copy = val.slice()
            copy[index] = turn;
            if (turn === 'X') {
                setTurn('O')
            }
            else {
                setTurn('X')
            }
            setVal(copy)
            checkBoard(copy, turn)
        }
    }

    let checkBoard = (arr, player) => {
        if (player === 'X') player = 'O'
        else player = 'X'
        if (arr[0] + arr[1] + arr[2] === 'XXX' || arr[0] + arr[1] + arr[2] === 'OOO') setStatus(['Player ' + arr[0] + ' won!', false])
        else if (arr[3] + arr[4] + arr[5] === 'XXX' || arr[3] + arr[4] + arr[5] === 'OOO') setStatus(['Player ' + arr[3] + ' won!', false])
        else if (arr[6] + arr[7] + arr[8] === 'XXX' || arr[6] + arr[7] + arr[8] === 'OOO') setStatus(['Player ' + arr[6] + ' won!', false])
        else if (arr[0] + arr[3] + arr[6] === 'XXX' || arr[0] + arr[3] + arr[6] === 'OOO') setStatus(['Player ' + arr[0] + ' won!', false])
        else if (arr[1] + arr[4] + arr[7] === 'XXX' || arr[1] + arr[4] + arr[7] === 'OOO') setStatus(['Player ' + arr[1] + ' won!', false])
        else if (arr[2] + arr[5] + arr[8] === 'XXX' || arr[2] + arr[5] + arr[8] === 'OOO') setStatus(['Player ' + arr[2] + ' won!', false])
        else if (arr[0] + arr[4] + arr[8] === 'XXX' || arr[0] + arr[4] + arr[8] === 'OOO') setStatus(['Player ' + arr[0] + ' won!', false])
        else if (arr[2] + arr[4] + arr[6] === 'XXX' || arr[2] + arr[4] + arr[6] === 'OOO') setStatus(['Player ' + arr[2] + ' won!', false])
        else if (arr.every(el => el !== ' ')) setStatus(['Draw :)', false])
        else setStatus(['Player ' + player + '\'s turn', true])
    }

    return (
        <div className="container">
            <div className="turn">{status[0]}</div>
            <div className="board">
                <Square val={val[0]} click={changeVal} index='0' />
                <Square val={val[1]} click={changeVal} index='1' />
                <Square val={val[2]} click={changeVal} index='2' />
                <Square val={val[3]} click={changeVal} index='3' />
                <Square val={val[4]} click={changeVal} index='4' />
                <Square val={val[5]} click={changeVal} index='5' />
                <Square val={val[6]} click={changeVal} index='6' />
                <Square val={val[7]} click={changeVal} index='7' />
                <Square val={val[8]} click={changeVal} index='8' />
            </div>
        </div>

    )
}