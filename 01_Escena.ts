/// <reference path="02_Clases.ts"/>

const Canvas:any = document.querySelector('canvas')
const ctx = Canvas.getContext("2d")
const Cuerpo:any = document.querySelector('body')

Canvas.width = 800
Canvas.height = 608
Canvas.style.border = "7px solid darkblue"
Canvas.style.backgroundColor = "purple"

Cuerpo.style.backgroundColor = "black"
Cuerpo.style.display = "flex"
Cuerpo.style.justifyContent = "center"

function Pinta()
{
let Escenario:number[][]=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

for(let y = 0; y < 19; y++)
{
    for(let x = 0; x < 25; x++)
    {
        if(Escenario[y][x] == 0)
        {
            ctx.fillStyle = 'gray'
            ctx.fillRect(32 * x, 32 * y, 32, 32)
        }

        if(Escenario[y][x] == 1)
        {
            ctx.fillStyle = 'darkblue'
            ctx.fillRect(32 * x, 32 * y, 32, 32)
        }
    }
}

Clases.listaBloques.map(bloque => {
    let coorX = Math.round(bloque.posX/32)
    let coorY = Math.round(bloque.posY/31)
    bloque.Dibujar()

    if(Escenario[coorY][coorX] == 0)
    {
        bloque.Mover()
    }
})

}

function Principal()
{
    requestAnimationFrame(Principal)

    Canvas.width = 800
    Canvas.height = 608
    Pinta()
}

Principal()