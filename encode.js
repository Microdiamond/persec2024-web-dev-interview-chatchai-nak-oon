class ReverseEncoder {

    encode(text) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let encodedText = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = alphabet.indexOf(char.toLowerCase());
            if (index >=0) {
                const reversedChar = alphabet[25 - index]; //Reverse จากตำแหน่ง index
                encodedText += char === char.toUpperCase() ? reversedChar.toUpperCase() : reversedChar;//เช็คอักษรที่เข้ามาว่าuper ไหม ถ้าอัพก็ให้ อักษรที่รีเวิสuper
            } else {
                encodedText += char;
            }
        }

        return encodedText;
    }

    decode(encodedText) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let decodedText = '';

        for (let i = 0; i < encodedText.length; i++) {
            const char = encodedText[i];
            const index = alphabet.indexOf(char.toLowerCase());
            if (index >=0) {
                const originalChar = alphabet[25 - index];
                decodedText += char === char.toUpperCase() ? originalChar.toUpperCase() : originalChar;
            } else {
                decodedText += char;
            }
        }

        return decodedText;
    }
}


const reverseEncoder = new ReverseEncoder();
const originalText = "Az";
const encodedText = reverseEncoder.encode(originalText);
console.log(encodedText);
const decodedText = reverseEncoder.decode(encodedText);
console.log(decodedText);
