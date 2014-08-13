'use strict';
(function() {
/**
 * model
 *
 * @constructor
 */
    // ボードマス作成
    var CreateBoard = function() {
        this.initialize();
    }
    CreateBoard.prototype = {
        initialize: function(){
            this.initCell();
        },
        initCell: function(i, j){
            var LENGTH_X  = 9;
            var LENGTH_Y = 9;
            var blockCount = null;
            var blocks = [];
            var blockElement = [];
            blockCount = LENGTH_X * LENGTH_Y;
            for (var i = 0; i < LENGTH_X; i++) {
                blocks[i] = [];
                blockElement[i] = [];
                for(var j = 0; j < LENGTH_Y; j++) {
                    blocks[i][j] = 0;
                    var board = document.getElementById('board');
                    var block = document.createElement('b');
                    block.className = "closed";
                    board.appendChild(block);
                    // (function (n, m) {
                    //     block.onclick = function() {
                    //         var isClear = SelectBlock(n, m, true, n, m);
                    //         // console.log(1);
                    //         if (isClear) {
                    //           alert('CLEAR');
                    //         }
                    //     }
                    // })(i, j);
                }
            }
        }
    }

    // 爆弾
    var CreateBombs = function() {
        this.initialize();
    }
    CreateBombs.prototype = {
        initialize: function(){
            this.initBomb();
        },
        initBomb: function(){
            var LENGTH_X  = 9;
            var LENGTH_Y = 9;
            var blockCount = null;
            var blocks = [];
            var blockElement = [];
            var mines = 10;
            for (var i = 0; i < LENGTH_X; i++) {
                blocks[i] = [];
                blockElement[i] = [];
                for(var j = 0; j < LENGTH_Y; j++) {
                    blocks[i][j] = 0;
                    var randomNum = Math.floor(Math.random() * 10) + 1;
                    // RandomY = Math.floor(Math.random() * 20) + 1;
                    var bombElm = document.createElement('i');
                    bombElm.className = "bomb";
                    console.log(randomNum);
                    if(randomNum > 9.5){
                        blocks[i][j] = 1;
                        // blockCount++;
                        block.appendChild(bombElm);
                    }
                    blockElement[i][j] = block;
                    board.appendChild(block);
                }
            }
        }
    }
/**
 * veiw
 *
 *
 */
    // マス作成
    var viewCells = function() {
        this.initialize();
    }
    document.addEventListener('DOMContentLoaded', function() {
        var tCreateBoard = new CreateBoard();
    }, false);

    // 爆弾作成
    document.addEventListener('DOMContentLoaded', function() {
        var tCreateBombs = new CreateBombs();
    }, false);

    // タイマー
    // document.addEventListener('DOMContentLoaded', timeCount, false);
    var startTime = new Date();
    // var hour = 0;
    var tMin = 0;
    var tSec = 0;
    var nowTime = 0;
    var tTime = 0;

    function timeCount(){
        nowTime = new Date();
        tTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
        // hour = Math.floor(tTime / 3600Math.floor);
        tMin = Math.floor((tTime / 60) % 60);
        tSec = tTime % 60;

        // if(hour < 10) { hour = "0" + hour; }
        if(tMin < 10) { tMin = "0" + tMin; }
        if(tSec < 10) { tSec = "0" + tSec; }

        var timer = tMin + ':' + tSec;

        setTimeout(function(){
            var timeElm = document.getElementById('time');
            timeElm.innerHTML = timer;
            timeCount();
        }, 1000);
        return this;
    }

/**
 * controler
 *
 *
 */
    // function gameover() {
    //     var containerElm = document.getElementById('container');
    //     var modalElm = document.createElement('div');
    //     modalElm.className = "modal";
    //     modalElm.innerHTML = '<p class="text">ゲームオーバー！！</p>';
    //     containerElm.appendChild(modalElm);
    //     for (var i = 0; i < LENGTH_X; i++) {
    //         for(var j = 0; j < LENGTH_Y; j++) {
    //             if (blocks[i][j] == 1) {
    //                 blockElement[i][j].classList.remove("closed");
    //                 // blockElement[i][j].innerHTML = '<i class="bomb"></i>';
    //                 blockElement[i][j].style.backgroundColor = '#f00';
    //             }
    //         }
    //     }
    // }

/**
 * controler
 *
 *
 */
    // var SelectBlock = function(i, j, orgI, orgJ) {
    //     this.init();
    // }
    // SelectBlock.prototype = {
    //     init: function(isClick) {
    //         var blocks = [];
    //         if (isClick && blocks[i][j] == 1) {
    //             gameover();
    //             // if (confirm("GAME ORVER\nRESTART?")) {
    //             //     // initCell();
    //             // }
    //             return false;
    //             } else if (blocks[i][j] == 2) {
    //                 return false;
    //         }

    //         blockCount--;
    //         blocks[i][j] = 2;

    //         var bomCount = '';
    //         for (var n = i-1; n <= i + 1; n++) {
    //             if (n < 0 || n >= LENGTH_X) {
    //                 continue;
    //             }
    //             for (var m = j-1; m <= j +1; m++) {
    //                 if (0 <= m && m < LENGTH_Y) {
    //                     if (blocks[n][m] == 1) {
    //                         bomCount++;
    //                     }
    //                 }
    //             }
    //         }

    //         blockElement[i][j].innerHTML = bomCount;
    //         blockElement[i][j].classList.remove("closed");

    //         if (bomCount == 0) {
    //             for (var n = i-1; n <= i + 1; n++) {
    //                 if (n < 0 || n >= LENGTH_X) {
    //                     continue;
    //                 }
    //                 for (var m = j-1; m <= j + 1; m++) {
    //                     if (0 <= m && m < LENGTH_Y) {
    //                         if ((n == i && m ==j) || (n == orgI && m == orgJ)) {
    //                             //
    //                         } else {
    //                             SelectBlock(n, m, false, orgI, orgJ);
    //                         }
    //                     }
    //                 }
    //             }
    //         }

    //         if (blockCount == 0) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // }
    // document.addEventListener('DOMContentLoaded', function() {
    //     var tSelectBlock = new SelectBlock();
    // }, false);

})(this);

