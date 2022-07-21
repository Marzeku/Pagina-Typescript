/// <reference path="02_Clases.ts"/>

Clases.listaBloques.map(bloques => {
    document.addEventListener('keydown', (e) => {
        if(e.key == '6' || e.key == 'd' || e.key == 'D')
        {
            bloques.posX += 5
        }

        if(e.key == '4' || e.key == 'a' || e.key == 'A')
        {
            bloques.posX -= 5
        }
    })
})