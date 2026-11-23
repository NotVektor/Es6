const btn_info = document.getElementById("btn_info");
const p_info = document.getElementById("p_info");
const btn_play = document.getElementById("btn_play");
const div_game = document.getElementById("div_game");
const nofification_div = document.getElementById("nofification_div");
const history_display = document.getElementById("history_display");
const lifes_display = document.getElementById("lifes_display");
const hint_display = document.getElementById("hint_display");
const btn_send = document.getElementById("btn_send");

class Utente {
    constructor(nome, password) {
        this.nome = nome;
        this.password = password;
    }
}

const utenti = [
    new Utente("ciccioGamer", "ciccio1"),
    new Utente("icardi", "wandanara"),
    new Utente("khaby", "tiktok"),
    new Utente("rocco", "siffredi33"),
    new Utente("anna", "tatangelo")
];

// Source - https://stackoverflow.com/a/19454346
// Posted by Overcode, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-23, License - CC BY-SA 4.0

document.getElementById("#form").submit(function(e) {
    e.preventDefault();
}); 

