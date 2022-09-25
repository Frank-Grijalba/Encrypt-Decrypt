const textInput = document.querySelector(".text-input");
const message = document.querySelector(".message");

function btnEncrypt(){
    const encryptedText= toEncrypt(textInput.value);
    message.value = encryptedText;
    message.style.backgroundImage = "none";
    textInput.value = "";
}

function btnDecrypt(){
    const encryptedText= toDecrypt(textInput.value);
    message.value = encryptedText;
    message.style.backgroundImage = "none";
    textInput.value = "";
}

function toEncrypt(stringToEncrypt){
    let codeMatrix = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringToEncrypt = stringToEncrypt.toLowerCase();

    for( let i = 0; i < codeMatrix.length; i++){
        
        if(stringToEncrypt.includes(codeMatrix[i][0])){
            stringToEncrypt = stringToEncrypt.replaceAll(codeMatrix[i][0], codeMatrix[i][1]); 
        }
    }
    return stringToEncrypt;
}

function toDecrypt(stringToDecrypt){
    let codeMatrix = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringToDecrypt = stringToDecrypt.toLowerCase();

    for( let i = 0; i < codeMatrix.length; i++){
        if(stringToDecrypt.includes(codeMatrix[i][1])){
            stringToDecrypt = stringToDecrypt.replaceAll(codeMatrix[i][1], codeMatrix[i][0]); 
        }
    }
    return stringToDecrypt;
}

function copy(){
    message.select();
    navigator.clipboard.writeText(message.value);
    alert("Text Copied");
    message.value = "";
}