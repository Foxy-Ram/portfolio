$(document).ready(function(){

    $("#h1-da").click(function(){
        $(".inner_da").slideToggle(300, function() {

            // Check the visibility of the element after the toggle
            if ($(this).is(":visible")) {
                console.log(true); // Element is toggled (visible)
                $("#h1-da").animate({"font-size":"70px", "margin-top":"25px"});
                $(".da").animate({"height":"150px"});

            } else {
                console.log(false); // Element is untoggled (hidden)
                $("#h1-da").animate({"font-size":"95px", "margin-top": "80px"});
                $(".da").animate({"height":"300px"});
            }
        });

        // Setting remaining all to its original properties
        $(".inner_ds, .inner_ml, .inner_dl, .inner_nlp, .inner_web, .inner_llm").slideUp(300, function(){
            $("#h1-ds, #h1-ml, #h1-dl, #h1-nlp, #h1-web, #h1-llm").animate({"font-size":"95px", "margin-top": "80px"});
            $(".ds, .ml, .dl, .nlp, .web, .llm").animate({"height":"300px"});
        });
    });
//---------------------------------------------------------------------------------------------
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
        
        $(".inner_da, .inner_ml, .inner_dl, .inner_nlp, .inner_web, .inner_llm").slideUp(300, function(){
            $("#h1-da, #h1-ml, #h1-dl, #h1-nlp, #h1-web, #h1-llm").animate({"font-size":"95px", "margin-top": "80px"});
            $(".da, .ml, .dl, .nlp, .web, .llm").animate({"height":"300px"});
        });
    });
//---------------------------------------------------------------------------------------------
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
        
        $(".inner_da, .inner_ds, .inner_dl, .inner_nlp, .inner_web, .inner_llm").slideUp(300, function(){
            $("#h1-da, #h1-ds, #h1-dl, #h1-nlp, #h1-web, #h1-llm").animate({"font-size":"95px", "margin-top": "80px"});
            $(".da, .ds, .dl, .nlp, .web, .llm").animate({"height":"300px"});
        });
    });
//---------------------------------------------------------------------------------------------
    $("#h1-dl").click(function(){
        $(".inner_dl").slideToggle(300);
        $(".inner_da, .inner_ds, .inner_ml, .inner_nlp, .inner_web, .inner_llm").slideUp(300);
    });
//---------------------------------------------------------------------------------------------
    $("#h1-nlp").click(function(){
        $(".inner_nlp").slideToggle(300);
        $(".inner_da, .inner_ds, .inner_ml, .inner_dl, .inner_web, .inner_llm").slideUp(300);
    });
//---------------------------------------------------------------------------------------------
    $("#h1-web").click(function(){
        $(".inner_web").slideToggle(300);
        $(".inner_da, .inner_ds, .inner_ml, .inner_dl, .inner_nlp, .inner_llm").slideUp(300);
    });
//---------------------------------------------------------------------------------------------
    $("#h1-llm").click(function(){
        $(".inner_llm").slideToggle(300);
        $(".inner_da, .inner_ds, .inner_ml, .inner_dl, .inner_nlp, .inner_web").slideUp(300);
    });
    
});



