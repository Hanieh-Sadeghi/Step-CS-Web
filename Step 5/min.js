function runCode(codeId) {
    let codeElement = document.getElementById(codeId);
    let code = codeElement.textContent.trim();

    console.clear();
    try {
        let fn = new Function(code);
        fn();
    } catch (error) {
        console.error(error);
    }
}

let designModeOn = false;

document.addEventListener("keydown", function (event) {
    if (event.key === "d") {
        designModeOn = !designModeOn;
        if (designModeOn) {
            document.designMode = "on";
            document.body.style.cursor = "crosshair";
        } else {
            document.designMode = "off";
            document.body.style.cursor = "auto";
        }
    }
});