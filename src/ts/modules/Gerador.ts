export default class Gerador {
  private senhaArray: string[] = [];
  private simbolos = '"!@#$%&*&()_-+=§{[ª]}º;:?/°><|';
  qtd: number = 0;

  private rand(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private geraMaiuscula(): string {
    return String.fromCharCode(this.rand(65, 91));
  }

  private geraMinuscula(): string {
    return String.fromCharCode(this.rand(97, 123));
  }

  private geraNumero(): string {
    return String.fromCharCode(this.rand(48, 58));
  }

  private geraSimbolo(): string {
    return this.simbolos[this.rand(0, this.simbolos.length)];
  }

  public geraSenha(qtd?: string, maic?: boolean, minc?: boolean, numr?: boolean, simb?: boolean): string {
    if(this.senhaArray.length !== 0) this.senhaArray = [];
    
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
