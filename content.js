$(document).ready(function(){

    function resetOthers(except) {
        const allBlocks = [
            {button: "#h1-da", content: ".inner_da", container: ".da"},
            {button: "#h1-ds", content: ".inner_ds", container: ".ds"},
            {button: "#h1-ml", content: ".inner_ml", container: ".ml"},
            {button: "#h1-dl", content: ".inner_dl", container: ".dl"},
            {button: "#h1-nlp", content: ".inner_nlp", container: ".nlp"},
            {button: "#h1-web", content: ".inner_web", container: ".web"},
            {button: "#h1-llm", content: ".inner_llm", container: ".llm"}
        ];
        allBlocks.forEach(block => {
            if (block.button !== except) {
                $(block.content).slideUp(300);
                $(block.button).animate({"font-size":"95px", "margin-top": "80px"});
                $(block.container).animate({"height":"300px"});
            }
        });
    }

    $("#h1-da").click(function(){
        $(".inner_da").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-da").animate({"font-size":"70px", "margin-top":"25px"});
                $(".da").animate({"height":"150px"});
            } else {
                $("#h1-da").animate({"font-size":"95px", "margin-top": "80px"});
                $(".da").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-da");
    });

    $("#h1-ds").click(function(){
        $(".inner_ds").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-ds").animate({"font-size":"70px", "margin-top":"25px"});
                $(".ds").animate({"height":"150px"});
            } else {
                $("#h1-ds").animate({"font-size":"95px", "margin-top": "80px"});
                $(".ds").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-ds");
    });

    $("#h1-ml").click(function(){
        $(".inner_ml").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-ml").animate({"font-size":"70px", "margin-top":"25px"});
                $(".ml").animate({"height":"150px"});
            } else {
                $("#h1-ml").animate({"font-size":"95px", "margin-top": "80px"});
                $(".ml").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-ml");
    });

    $("#h1-dl").click(function(){
        $(".inner_dl").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-dl").animate({"font-size":"70px", "margin-top":"25px"});
                $(".dl").animate({"height":"150px"});
            } else {
                $("#h1-dl").animate({"font-size":"95px", "margin-top": "80px"});
                $(".dl").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-dl");
    });

    $("#h1-nlp").click(function(){
        $(".inner_nlp").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-nlp").animate({"font-size":"70px", "margin-top":"25px"});
                $(".nlp").animate({"height":"150px"});
            } else {
                $("#h1-nlp").animate({"font-size":"95px", "margin-top": "80px"});
                $(".nlp").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-nlp");
    });

    $("#h1-web").click(function(){
        $(".inner_web").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-web").animate({"font-size":"70px", "margin-top":"25px"});
                $(".web").animate({"height":"150px"});
            } else {
                $("#h1-web").animate({"font-size":"95px", "margin-top": "80px"});
                $(".web").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-web");
    });

    $("#h1-llm").click(function(){
        $(".inner_llm").slideToggle(300, function() {
            if ($(this).is(":visible")) {
                $("#h1-llm").animate({"font-size":"70px", "margin-top":"25px"});
                $(".llm").animate({"height":"150px"});
            } else {
                $("#h1-llm").animate({"font-size":"95px", "margin-top": "80px"});
                $(".llm").animate({"height":"300px"});
            }
        });
        resetOthers("#h1-llm");
    });
});