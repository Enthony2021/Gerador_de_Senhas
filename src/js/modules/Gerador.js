"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gerador {
    constructor() {
        this.senhaArray = [];
        this.simbolos = '"!@#$%&*&()_-+=§{[ª]}º;:?/°><|';
        this.qtd = 0;
    }
    rand(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    geraMaiuscula() {
        return String.fromCharCode(this.rand(65, 91));
    }
    geraMinuscula() {
        return String.fromCharCode(this.rand(97, 123));
    }
    geraNumero() {
        return String.fromCharCode(this.rand(48, 58));
    }
    geraSimbolo() {
        return this.simbolos[this.rand(0, this.simbolos.length)];
    }
    geraSenha(qtd, maic, minc, numr, simb) {
        if (this.senhaArray.length !== 0)
            this.senhaArray = [];
        this.qtd = Number(qtd);
        for (let i = 0; i < this.qtd; i++) {
            maic && this.senhaArray.push(this.geraMaiuscula());
            minc && this.senhaArray.push(this.geraMinuscula());
            numr && this.senhaArray.push(this.geraNumero());
            simb && this.senhaArray.push(this.geraSimbolo());
        }
        return this.senhaArray.join("").slice(0, this.qtd);
    }
}
exports.default = Gerador;
