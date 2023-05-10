export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export function reverseString(string) {
    let newString = '';
    let i;
    for (i = string.length; i >= 0; i--) {
        newString += string.charAt(i);
    };
    return newString;
}

export const calculator = {
    add: function add (x, y) {
        return x + y;
    }, 

    subtract: function subtract (x, y) {
        return x - y;
    },

    divide: function divide (x, y) {
        return x / y;
    }, 

    multiply: function multiply (x, y) {
        return x * y;
    }
}

export function caesarCipher(string, shift) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lowerString = string.toLowerCase();

    let cipherString = '';
    let i;
    for (i = 0; i < lowerString.length; i++) {
        if (alpha.includes(lowerString.charAt(i))) {
            let index = alpha.indexOf(lowerString.charAt(i));
            index += shift;
            if (index > 25) index -= 26;
            cipherString += `${alpha[index]}`;

        } else cipherString += lowerString.charAt(i);
    }

    for (i = 0; i < string.length; i++) {
        if (/[A-Z]/.test(string.charAt(i))) {
            const upper = cipherString.charAt(i).toUpperCase();
            cipherString = `${cipherString.substring(0, i)  }${upper}${  cipherString.substring(i +1)}`;
        }
    }
    return cipherString;
}