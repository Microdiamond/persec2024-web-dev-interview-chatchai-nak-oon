function hexToRgb(hex) {
    if (hex.startsWith('#')) {
        hex = hex.substr(1,6);
    }

    if (hex.length !== 6) {
        return null;
    }

    if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
    }
    
    const r = parseInt(hex.substr(0,2),16)
    const g = parseInt(hex.substr(2,2),16)
    const b = parseInt(hex.substr(4,3),16)
    
    return {r,g,b}
}

console.log(hexToRgb('#FF9933'))
console.log(hexToRgb('#FFF'))