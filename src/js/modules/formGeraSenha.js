"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormGeraSenha {
    constructor(gerador) {
        this.senhaGerada = document.querySelector(".senha-gerada");
        this.qtdCaracteres = document.querySelector(".qtd-caracteres");
        this.chkMaiuscula = document.querySelector(".chk-maiuscula");
        this.chkMinuscula = document.querySelector(".chk-minuscula");
        this.chkNumero = document.querySelector(".chk-numero");
        this.chkSimbolo = document.querySelector(".chk-simbolo");
        this.gerarSenha = document.querySelector(".gerar-senha");
        this.gerador = gerador;
    }
    waitClick() {
        if (this.gerarSenha)
            this.gerarSenha.addEventListener("click", () => {
                if (this.senhaGerada) {
                    this.senhaGerada.innerHTML = '';
                    console.log("Passei Aqui!");
                    this.senhaGerada.innerHTML = this.gerar();
                }
            });
    }
    gerar() {
        var _a, _b, _c, _d, _e;
        return (this.gerador.geraSenha((_a = this.qtdCaracteres) === null || _a === void 0 ? void 0 : _a.value, (_b = this.chkMaiuscula) === null || _b === void 0 ? void 0 : _b.checked, (_c = this.chkMinuscula) === null || _c === void 0 ? void 0 : _c.checked, (_d = this.chkNumero) === null || _d === void 0 ? void 0 : _d.checked, (_e = this.chkSimbolo) === null || _e === void 0 ? void 0 : _e.checked) || "Nada Selecionado");
    }
}
exports.default = FormGeraSenha;
