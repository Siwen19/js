let start_game = document.getElementById('start_game')
let mycanvas = document.querySelector('#chess')
let context = mycanvas.getContext('2d')
let position = true
let winner = document.querySelector('#winner')
let list = []
    // 画棋盘
    const chess = (() => {
        for (let a = 0; a < 29; a++) {
            list[a] = []
            for (let b = 0; b < 29; b++) {
                list[a][b] = 0
            }
        }

        for (let i = 0; i < 29; i++) {
            context.beginPath()
            context.strokeStyle = '#0000000'
            context.moveTo(15 + 30 * i, 15)
            context.lineTo(15 + 30 * i, 585)
            context.stroke()

            context.moveTo(15, 15 + 30 * i)
            context.lineTo(585, 15 + 30 * i)
            context.stroke()
            context.closePath()
        }
    })();
// 开始下棋
start_game.addEventListener('click', () => {
    let reset_game = document.getElementById('reset_game')
    start_game.style.backgroundColor = '#2c3e52';

    function chess() {
        // 获得画布可视区里的X坐标 
        let x = event.offsetX
        // 获得画布可视区里的Y坐标
        let y = event.offsetY
        x = Math.floor(x / 30)
        y = Math.floor(y / 30)
        // 判断是否有位置重复 
        if (list[x][y] == 0) {
            goStep(x, y, position)
            position = !position
        }
    }

    mycanvas.addEventListener('click', chess);

    const goStep = (x, y, position) => {
        context.beginPath()
        context.arc(15 + 30 * x, 15 + 30 * y, 15, 0, 2 * Math.PI, false)
        let g = context.createRadialGradient(15 + x * 30, 15 + y * 30, 15, 15 + x * 30, 15 + y * 30, 0); // 设置渐变 
        if (position) {
            // 0是渐变开始的位置，后面是颜色
            g.addColorStop(0, '#0A0A0A'); // 黑棋
            g.addColorStop(1, '#636766')
            list[x][y] = 1; // 黑棋
        } else {
            g.addColorStop(0, '#D1D1D1'); // 白棋
            g.addColorStop(1, '#F9F9F9')
            list[x][y] = 2; // 白棋
        }
        checkRow(x, y)
        checkColumn(x, y)
        checkLeft(x, y)
        checkRight(x, y)
        context.fillStyle = g
        context.fill()
        context.closePath()
    }
    // 判断 横向 是否有连续五子的情况
    const checkRow = (x, y) => {
        let n = list[x][y]
        let count = 0

        if (x < 4) {
            // 只能向右
            for (let a = 0; a < 5; a++) {
                if (list[x + a][y] == n) {
                    count++
                } else {
                    count = 0
                }
            } 
            result(n, count)
        } else {
            for (let a = 0; a < 5; a++) {
                if (list[x + a][y] == n) {
                    count++
                } else {
                    count = 0
                }
            } 
            result(n, count)

            for (let b = 0; b < 5; b++) {
                if (list[x - b][y] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        }
    }
    // 判断 纵向 是否有连续五子的情况
    const checkColumn = (x, y) => {
        let n = list[x][y]
        let count = 0

        if (y < 4) {
            // 只能向下
            for (let b = 0; b < 5; b++) {
                if (list[x][y + b] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        } else {
            for (let a = 0; a < 5; a++) {
                if (list[x][y + a] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)

            for (let b = 0; b < 5; b++) {
                if (list[x][y - b] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        }
    }
    // 判断 左斜线上 有没有连续五子的情况
    const checkLeft = (x, y) => {
        let n = list[x][y]
        let count = 0

        if (x > 3 && y > 3) {
            for (let a = 0; a < 5; a++) {
                // 向左上遍历
                if (list[x - a][y - a] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)

            for (let b = 0; b < 5; b++) {
                // 向右下遍历
                if (list[x + b][y + b] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        } else {
            // 向右下遍历
            for (let c = 0; c < 5; c++) {
                if (list[x + c][y + c] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        }
    }
    // 判断 右斜线上 有没有连续五子的情况
    const checkRight = (x, y) => {
        let n = list[x][y]
        let count = 0

        if (x > 3 && y > 3) {
            for (let a = 0; a < 5; a++) {
                if (list[x - a][y + a] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)

            for (let b = 0; b < 5; b++) {
                if (list[x + b][y - b] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        } else if (x > 3 && y < 4) {
            // 只能左下
            for (let c = 0; c < 5; c++) {
                if (list[x - c][y + c] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        } else if (x < 4 && y > 3) {
            // 只能右上
            for (let d = 0; d < 5; d++) {
                if (list[x + d][y - d] == n) {
                    count++
                } else {
                    count = 0
                }
            }
            result(n, count)
        }
    }

    const result = (n, count) => {
        if (n == 1 && count == 5) {
            alert('恭喜黑棋胜出！')
            mycanvas.removeEventListener('click', chess)
        } else if (n == 2 && count == 5) {
            alert('恭喜白棋胜出！')
            mycanvas.removeEventListener('click', chess) 
        }
    } 

    // 重新开始
    reset_game.addEventListener('click', () => {
        location.reload()
    })
})
