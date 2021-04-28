import { useState } from 'react'
import Board from './Board'
import History from './History'

export default function Game(props) {
    let [turn, setTurn] = useState('X')
    let [val, setVal] = useState(new Array(9).fill(' '))
    let [status, setStatus] = useState('Player X\'s turn')

    let changeVal = (index, value) => {
        if (value === ' ') {   
            let prevTurn = turn
            let copy = val.slice()
            copy[index] = turn;
            if (turn === 'X') {
                setTurn('O')
            }
            else {
                setTurn('X')
            }
            storeState(copy)
            setVal(copy)
            if (prevTurn === 'X') prevTurn = 'O'
            else prevTurn = 'X'
            checkBoard(copy, prevTurn)
        }
    }

    let checkBoard = (arr, player) => {
        if (arr[0] + arr[1] + arr[2] === 'XXX' || arr[0] + arr[1] + arr[2] === 'OOO') setStatus('Player ' + arr[0] + ' won!')
        else if (arr[3] + arr[4] + arr[5] === 'XXX' || arr[3] + arr[4] + arr[5] === 'OOO') setStatus('Player ' + arr[3] + ' won!')
        else if (arr[6] + arr[7] + arr[8] === 'XXX' || arr[6] + arr[7] + arr[8] === 'OOO') setStatus('Player ' + arr[6] + ' won!')
        else if (arr[0] + arr[3] + arr[6] === 'XXX' || arr[0] + arr[3] + arr[6] === 'OOO') setStatus('Player ' + arr[0] + ' won!')
        else if (arr[1] + arr[4] + arr[7] === 'XXX' || arr[1] + arr[4] + arr[7] === 'OOO') setStatus('Player ' + arr[1] + ' won!')
        else if (arr[2] + arr[5] + arr[8] === 'XXX' || arr[2] + arr[5] + arr[8] === 'OOO') setStatus('Player ' + arr[2] + ' won!')
        else if (arr[0] + arr[4] + arr[8] === 'XXX' || arr[0] + arr[4] + arr[8] === 'OOO') setStatus('Player ' + arr[0] + ' won!')
        else if (arr[2] + arr[4] + arr[6] === 'XXX' || arr[2] + arr[4] + arr[6] === 'OOO') setStatus('Player ' + arr[2] + ' won!')
        else if (arr.every(el => el !== ' ')) setStatus('Draw :)')
        else setStatus('Player ' + player + '\'s turn')
    }

    let [states, setStates] = useState([val])
    let storeState = (data) => {
        if (val.join('') !== states[states.length - 1].join('')) {
            let index = states.map(el => el.join('')).indexOf(val.join(''))
            let copy = states.slice(0, index + 1)
            copy.push(data)
            setStates(copy)
        }
        else {
            let copy = states.slice()
            copy.push(data)
            setStates(copy)
        }
    }

    let goToState = (arr) => {
        setVal(arr[arr.length - 1])
    }

    return (
        <div className="container">
            <Board values={val} stats={status} click={changeVal} />
            <div className="history">
                <h1>Game History</h1>
                <div className="historyBoard">
                    {states.map((el, i, arr) => <History index={i} click={goToState} currentState={arr.slice(0, i + 1)} />)}
                </div>
            </div>
        </div>

    )
}