// Background color:
window.onload = function window () {

        let colorOfBackground = document.getElementById("background-color");
        colorOfBackground.addEventListener("change", function() {
            let setBackgroundColor = colorOfBackground.selectedOptions[0];
            document.body.style.backgroundColor = colorOfBackground.value;
            

            localStorage.setItem("backgroundColorSelected", colorOfBackground.value);
        });

        let colorOfFont = document.getElementById("font-color");
        colorOfFont.addEventListener("change", function() {
            let setColorOfFOnt = colorOfFont.selectedOptions[0];
            document.body.style.color = colorOfFont.value;

            localStorage.setItem("fontColorSelected", colorOfFont.value);
        });
        
        let sizeOfFont = document.getElementById("font-size");
        sizeOfFont.addEventListener("change", function () {
            let setFontSize = document.querySelector(".all-text");
            setFontSize.style.fontSize = `${sizeOfFont.value}px`;

            localStorage.setItem("fontSizeSelected", `${sizeOfFont.value}px`);
        })

        let spaceOfTheLine = document.getElementById("line-spacing");
        spaceOfTheLine.addEventListener("change", function () {
            let setLineSpacing = document.querySelector(".all-text");
            setLineSpacing.style.lineHeight = `${spaceOfTheLine.value}px`;

            localStorage.setItem("SpaceSelected", `${spaceOfTheLine.value}px`);
        })

        let fontType = document.getElementById("font-type");
        fontType.addEventListener("change", function() {
            let setFontFamily = fontType.selectedOptions[0];
            document.body.style.fontFamily = fontType.value;
            

            localStorage.setItem("fontSelected", fontType.value);
        });


    let backgroundColorSaved = localStorage.getItem("backgroundColorSelected");
     document.body.style.backgroundColor = backgroundColorSaved; 

    let fontColorSaved = localStorage.getItem("fontColorSelected");
    document.body.style.color = fontColorSaved; 

    let fontSizeSaved = localStorage.getItem("fontSizeSelected");
    document.body.style.fontSize = fontSizeSaved; 

    let lineSpaceSaved = localStorage.getItem("SpaceSelected");
    document.body.style.lineHeight = lineSpaceSaved;
    
    let fontSaved = localStorage.getItem("fontSelected");
    document.body.style.fontFamily = fontSaved; 
}


