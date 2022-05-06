const rand = (max, min) => Math.floor(Math.random() * (max-min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '"!@#$%&*&()_-+=§{[ª]}º;:?/°><\|';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]; 

export default function geraSenha(qtd, maic, minc, numr, simb){
    const senhaArray = [];
    qtd = Number(qtd);
    for (let i=0; i<qtd; i++) {
        maic && senhaArray.push(geraMaiuscula());
        minc && senhaArray.push(geraMinuscula());
        numr && senhaArray.push(geraNumero());
        simb && senhaArray.push(geraSimbolo());
    }
    return (senhaArray.join('').slice(0, qtd));
}

