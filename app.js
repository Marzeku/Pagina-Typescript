var Clases;
(function (Clases) {
    var Bloque = /** @class */ (function () {
        function Bloque(posX, posY, ancho, alto, color) {
            this.posX = posX;
            this.posY = posY;
            this.ancho = ancho;
            this.alto = alto;
            this.color = color;
        }
        Bloque.prototype.Dibujar = function () {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
        };
        Bloque.prototype.Mover = function () {
            this.posY += 1;
        };
        return Bloque;
    }());
    Clases.listaBloques = [];
    Clases.listaBloques.push(new Bloque(32, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(170, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(207, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(344, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(481, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(569, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(702, 0, 32, 32, 'white'));
    Clases.listaBloques.push(new Bloque(780, 0, 32, 32, 'white'));
})(Clases || (Clases = {}));
/// <reference path="02_Clases.ts"/>
var Canvas = document.querySelector('canvas');
var ctx = Canvas.getContext("2d");
var Cuerpo = document.querySelector('body');
Canvas.width = 800;
Canvas.height = 608;
Canvas.style.border = "7px solid darkblue";
Canvas.style.backgroundColor = "purple";
Cuerpo.style.backgroundColor = "black";
Cuerpo.style.display = "flex";
Cuerpo.style.justifyContent = "center";
function Pinta() {
    var Escenario = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    for (var y = 0; y < 19; y++) {
        for (var x = 0; x < 25; x++) {
            if (Escenario[y][x] == 0) {
                ctx.fillStyle = 'gray';
                ctx.fillRect(32 * x, 32 * y, 32, 32);
            }
            if (Escenario[y][x] == 1) {
                ctx.fillStyle = 'darkblue';
                ctx.fillRect(32 * x, 32 * y, 32, 32);
            }
        }
    }
    Clases.listaBloques.map(function (bloque) {
        var coorX = Math.round(bloque.posX / 32);
        var coorY = Math.round(bloque.posY / 31);
        bloque.Dibujar();
        if (Escenario[coorY][coorX] == 0) {
            bloque.Mover();
        }
    });
}
function Principal() {
    requestAnimationFrame(Principal);
    Canvas.width = 800;
    Canvas.height = 608;
    Pinta();
}
Principal();
/// <reference path="02_Clases.ts"/>
Clases.listaBloques.map(function (bloques) {
    document.addEventListener('keydown', function (e) {
        if (e.key == '6' || e.key == 'd' || e.key == 'D') {
            bloques.posX += 5;
        }
        if (e.key == '4' || e.key == 'a' || e.key == 'A') {
            bloques.posX -= 5;
        }
    });
});
