
    function habilitarInputs(){
            const input = document.getElementsByClassName("inputI");
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = false;
            }
        };

    function deshabilitarInputs(){
        const input = document.getElementsByClassName("inputI");
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = true;
            }
            const desac = document.getElementsByClassName("desac");
        for (var i = 0; i < desac.length; i++) {
            desac[i].disabled = true;
        }
        };

    function habilitarButton(){
        const input = document.getElementsByClassName("desac")
        for (var i = 0; i < input.length; i++) {
            input[i].disabled = false;
        }
    }


  
   