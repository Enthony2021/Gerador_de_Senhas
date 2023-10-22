import FormGeraSenha from './modules/FormGeraSenha';
import Gerador from './modules/Gerador';
import '../assets/css/style.css';


const formGeraSenha = new FormGeraSenha(new Gerador());

formGeraSenha.waitClick();