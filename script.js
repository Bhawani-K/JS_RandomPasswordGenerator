let keyList = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*~'
let temp = '';

function generatePass(pLength) {
    temp = '';
    for (let i = 0; i < pLength; i++) {
        // *******************************************************************************************************************************************************
        // => keyList.length : gets the length of the keyList string and returns a number.
        // => Math.random() : generates a random number between 0 and 1
        // => Math.floor(Math.random() * keyList.length) : multiplies the random number fetching the keyList length,which is a string
        // => Math.floor : rounds down to the nearest whole number
        // => keyList.charAt() : retrieves the character at the index equal to the result passed in keyList
        // *******************************************************************************************************************************************************
        temp = temp + keyList.charAt(Math.floor(Math.random() * keyList.length))
    }
    return temp;
}
generatePass()

function getForm(enterLength) {
    document.passGen.output.value = generatePass(enterLength)
}