$().ready(function () {

    var cartasViradas = [];

    var imagens = [];
    var tempImagens = [];

    const img_min = 1;
    const img_max = 14;

    for (var i = img_min; i <= img_max; i++) {
        tempImagens.push(`${i}`);
    }

    tempImagens = shuffle(tempImagens);

    for (var i = 0; i < 6; i++) {
        imagens.push(tempImagens[i]);
    }

    imagens.forEach(item => {
        imagens.push(item);
    });

    var gameStarted = false;
    var tempStage = false;
    var returnStage = false;

    var acertos = 0;

    $(".card").on('flip:done', function () {
        if (!gameStarted) {
            if (tempStage)
                returnStage = true;
            return;
        }
        cartasViradas.push(this);
        console.log(cartasViradas);
        if (cartasViradas.length == 2) {
            $("#block").show();
            if (cartasViradas[0] != cartasViradas[1]) {
                if ($(cartasViradas[0].children[1].children[0]).attr("src") == $(cartasViradas[1].children[1].children[0]).attr("src")) {
                    cartasViradas = [];
                    acertos++;
                    $("#acertou").dialog({
                        show: {
                            effect: "blind",
                            duration: "100"
                        },
                        hide: {
                            effect: "blind",
                            duration: "100"
                        },
                        position: {
                            my: "left",
                            at: "left",
                            of: window
                        },
                        open: function (event, ui) {
                            setTimeout("$('#acertou').dialog('close')", 3500);
                        }
                    });
                    $("#block").hide();
                    if (acertos == 6) {
                        ganhou();
                    }
                } else {
                    setTimeout(function () {
                        $("#errou").dialog({
                            show: {
                                effect: "blind",
                                duration: "100"
                            },
                            hide: {
                                effect: "blind",
                                duration: "100"
                            },
                            position: {
                                my: "right",
                                at: "right",
                                of: window
                            },
                            open: function (event, ui) {
                                setTimeout("$('#errou').dialog('close')", 1500);
                            }
                        });
                        $(cartasViradas[0]).flip(false);
                        $(cartasViradas[1]).flip(false);
                        cartasViradas = [];
                        $("#block").hide();
                    }, 200);
                }
            }
        }
    });

    function ganhou() {
        $('#acertou').dialog('close');
        $('#acertou').dialog('close');
        $('#errou').dialog('close');
        $('#errou').dialog('close');
        $("#ganhou").dialog({
            height: "300",
            width: "300",
            position: {
                my: "left",
                at: "left",
                of: window
            },
            show: {
                effect: "blind",
                duration: "400"
            },
            hide: {
                effect: "blind",
                duration: "400"
            }
        });

        setTimeout(() => {
            setTimeout(() => {
                $("#reloading").dialog();
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }, 500);
        }, 1000)

    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    $("#card1").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card2").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card3").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card4").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card5").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card6").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card7").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card8").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card9").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card10").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card11").flip({
        axis: "y",
        trigger: "click"
    });

    $("#card12").flip({
        axis: "y",
        trigger: "click"
    });

    $("#greeting").dialog({
        show: {
            effect: "blind",
            duration: 400
        },
        hide: {
            effect: "blind",
            duration: 200
        }
    });
    $("#greeting").dialog({
        close: function (event, ui) {
            $("#block").show();
            gameStarted = false;
            imagens = shuffle(imagens);
            $('.carta_back').each(function (i, obj) {
                $(this).attr("src", `img/${imagens[i]}.png`);
                console.log(`Carta ${i + 1}: anexada imagem ${imagens[i]}.png`);
            });
            // o melhor jeito de virar as cartas em ordem com um intervalo é usando várias funções setTimeout ¯\_(ツ)_/¯
            setTimeout(() => {
                $("#card1").flip(true);
                setTimeout(() => {
                    $("#card2").flip(true);
                    setTimeout(() => {
                        $("#card3").flip(true);
                        setTimeout(() => {
                            $("#card4").flip(true);
                            setTimeout(() => {
                                $("#card5").flip(true);
                                setTimeout(() => {
                                    $("#card6").flip(true);
                                    setTimeout(() => {
                                        $("#card7").flip(true);
                                        setTimeout(() => {
                                            $("#card8").flip(true);
                                            setTimeout(() => {
                                                $("#card9").flip(true);
                                                setTimeout(() => {
                                                    $("#card10").flip(true);
                                                    setTimeout(() => {
                                                        $("#card11").flip(true);
                                                        setTimeout(() => {
                                                            $("#card12").flip(true);
                                                            setTimeout(() => {
                                                                tempStage = true;
                                                                $(".card").each(function (i, obj) {
                                                                    $(this).flip(false);
                                                                });
                                                            }, 1500);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
            setTimeout(() => {
                console.log("O jogo começou");
                gameStarted = true;
                cartasViradas = [];
                $("#block").hide();
            }, 4000);
        }
    });
});
