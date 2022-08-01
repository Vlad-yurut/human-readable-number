module.exports = function toReadable(number) {
    const dict = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    function formatDecaNumber(number) {
        if (+number[0] >= 2 && +number[1] !== 0) {
            return dict[number[0] + '0'] + ' ' + dict[number[1]];
        }
        if (+number >= 10) {
            return dict[number];
        }
        if (+number[1] === 0) {
            return '';
        }
        return dict[number[1]];
    }

    const strNumber = String(number);

    if (strNumber.length === 1) {
        return dict[strNumber];
    }

    if (strNumber.length === 2) {
        return formatDecaNumber(strNumber);
    }

    const hundred = dict[strNumber[0]] + ' hundred';
    const deca = formatDecaNumber(strNumber.slice(1));

    return (hundred + ' ' + deca).trim();

}