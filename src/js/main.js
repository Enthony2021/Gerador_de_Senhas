"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormGeraSenha_1 = __importDefault(require("./modules/FormGeraSenha"));
const Gerador_1 = __importDefault(require("./modules/Gerador"));
require("../assets/css/style.css");
const formGeraSenha = new FormGeraSenha_1.default(new Gerador_1.default());
formGeraSenha.waitClick();
