import Gerador from "./Gerador";

export default class FormGeraSenha {
  private senhaGerada: HTMLDivElement | null = document.querySelector(".senha-gerada");
  private qtdCaracteres: HTMLInputElement | null =
    document.querySelector(".qtd-caracteres");
  private chkMaiuscula: HTMLInputElement | null =
    document.querySelector(".chk-maiuscula");
  private chkMinuscula: HTMLInputElement | null =
    document.querySelector(".chk-minuscula");
  private chkNumero: HTMLInputElement | null = document.querySelector(".chk-numero");
  private chkSimbolo: HTMLInputElement | null = document.querySelector(".chk-simbolo");
  private gerarSenha: HTMLButtonElement | null = document.querySelector(".gerar-senha");
  private gerador: Gerador;

  constructor(gerador: Gerador) {
    this.gerador = gerador;
  }

  public waitClick() {
    if (this.gerarSenha)
      this.gerarSenha.addEventListener("click", () => {
        if (this.senhaGerada) {
          this.senhaGerada.innerHTML = '';
          console.log("Passei Aqui!")
          this.senhaGerada.innerHTML = this.gerar();
        }
      });
  }

  private gerar(): string {
    return (
      this.gerador.geraSenha(
        this.qtdCaracteres?.value,
        this.chkMaiuscula?.checked,
        this.chkMinuscula?.checked,
        this.chkNumero?.checked,
        this.chkSimbolo?.checked
      ) || "Nada Selecionado"
    );
  }
}
