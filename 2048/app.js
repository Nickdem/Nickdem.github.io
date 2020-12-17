document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    const resultDisplay = document.querySelector('#result')
    const leftBtn = document.querySelector('.left-btn')
    const upBtn = document.querySelector('.up-btn')
    const rightBtn = document.querySelector('.right-btn')
    const downBtn = document.querySelector('.down-btn')
    const width = 4
    let squares = []
    let score = 0

    function createBoard() {
        for (let i = 0; i < width*width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }

    createBoard()

    function generate() {
        randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
            checkForGameOver()
        } else generate()
    }

    function moveRight() {
        for (let i =0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i + 1].innerHTML
                let totalThree = squares[i + 2].innerHTML
                let totalFour = squares[i + 3].innerHTML
                let row = [+totalOne, +totalTwo, +totalThree, +totalFour]
    
                let filterRow = row.filter(num => num)
                let missing = 4 - filterRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filterRow)
    
                squares[i].innerHTML = newRow[0]
                squares[i + 1].innerHTML = newRow[1]
                squares[i + 2].innerHTML = newRow[2]
                squares[i + 3].innerHTML = newRow[3]
            }
        }
    }
    
    function moveLeft() {
        for (let i =0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i + 1].innerHTML
                let totalThree = squares[i + 2].innerHTML
                let totalFour = squares[i + 3].innerHTML
                let row = [+totalOne, +totalTwo, +totalThree, +totalFour]
    
                let filterRow = row.filter(num => num)
                let missing = 4 - filterRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filterRow.concat(zeros)
    
                squares[i].innerHTML = newRow[0]
                squares[i + 1].innerHTML = newRow[1]
                squares[i + 2].innerHTML = newRow[2]
                squares[i + 3].innerHTML = newRow[3]
            }
        }
    }
    
    function moveDown() {
        for (let i = 0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i + width].innerHTML
            let totalThree = squares[i + (width * 2)].innerHTML
            let totalFour = squares[i + (width * 3)].innerHTML
            let columns = [+totalOne, +totalTwo, +totalThree, +totalFour]

            let filterColumns = columns.filter(num => num)
            let missing = 4 - filterColumns.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filterColumns)

            squares[i]. innerHTML = newColumn[0]
            squares[i + width]. innerHTML = newColumn[1]
            squares[i + (width * 2)]. innerHTML = newColumn[2]
            squares[i + (width * 3)]. innerHTML = newColumn[3]
        }
    }

    function moveUp() {
        for (let i = 0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i + width].innerHTML
            let totalThree = squares[i + (width * 2)].innerHTML
            let totalFour = squares[i + (width * 3)].innerHTML
            let columns = [+totalOne, +totalTwo, +totalThree, +totalFour]

            let filterColumns = columns.filter(num => num)
            let missing = 4 - filterColumns.length
            let zeros = Array(missing).fill(0)
            let newColumn = filterColumns.concat(zeros)

            squares[i]. innerHTML = newColumn[0]
            squares[i + width]. innerHTML = newColumn[1]
            squares[i + (width * 2)]. innerHTML = newColumn[2]
            squares[i + (width * 3)]. innerHTML = newColumn[3]
        }
    }

    function combineRow() {
        for (let i =0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i + 1].innerHTML) {
                let combinedTotal = +squares[i].innerHTML + +squares[i + 1].innerHTML
                squares[i].innerHTML = combinedTotal
                squares[i + 1].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    function combineColumn() {
        for (let i =0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML) {
                let combinedTotal = +squares[i].innerHTML + +squares[i + width].innerHTML
                squares[i].innerHTML = combinedTotal
                squares[i + width].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    function control(e) {
        if (e.keyCode === 39) {
            keyRight()
        } else if (e.keyCode === 37) {
            keyLeft()
        } else if (e.keyCode === 38) {
            keyUp()
        } else if (e.keyCode === 40) {
            keyDown()
        }
    }

    document.addEventListener('keyup', control)

    leftBtn.addEventListener('click', keyLeft)
    upBtn.addEventListener('click', keyUp)
    rightBtn.addEventListener('click', keyRight)
    downBtn.addEventListener('click', keyDown)

    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
    }

    function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }

    function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        generate()
    }

    function keyUp() {
        console.log('logup');
        moveUp()
        combineColumn()
        moveUp()
        generate()
    }

    function checkForWin() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 2048) {
                resultDisplay.innerHTML = 'You win!'
                document.removeEventListener('keyup', control)
                leftBtn.removeEventListener('click', keyLeft)
                upBtn.removeEventListener('click', keyUp)
                rightBtn.removeEventListener('click', keyRight)
                downBtn.removeEventListener('click', keyDown)
            }
        }
    }

    function checkForGameOver() {
        let zeros = 0
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 0) {
                zeros++
            } 
        }
        if (zeros == 0) {
            resultDisplay.innerHTML = 'You Lose!'
            document.removeEventListener('keyup', control)
            leftBtn.removeEventListener('click', keyLeft)
            upBtn.removeEventListener('click', keyUp)
            rightBtn.removeEventListener('click', keyRight)
            downBtn.removeEventListener('click', keyDown)
        }
    }
})
