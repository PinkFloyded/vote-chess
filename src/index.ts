import { Chessground } from "chessground";
import "./css/chessground/chessground.base.css";
import "./css/style.css";
import "./css/chessground/chessground.brown.css";
import "./css/chessground/chessground.cburnett.css";

document.addEventListener("DOMContentLoaded", function(event) {
    const config = {};
    const element = document.getElementById('board');
    const ground = Chessground(element, config);
});
