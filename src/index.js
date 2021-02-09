import { Chessground } from "chessground";
import "./css/chessground/chessground.base.css";
import "./css/style.css";
import "./css/chessground/chessground.brown.css";
import "./css/chessground/chessground.cburnett.css";

document.addEventListener("DOMContentLoaded", function(event) {
    var config = {};
    var element = document.getElementById('board');
    var ground = Chessground(element, config);
});

