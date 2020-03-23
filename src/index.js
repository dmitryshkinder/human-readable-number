module.exports = function toReadable (number) {

    let [ digit, decad, hundred ] = number.toString().split('').reverse();
    let result = '';

    let digits = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    let first_decades = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'
    };

    let decades ={
        0: ' ',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    if(hundred){
        result += digits[hundred] + ' hundred';
    }

    if(decad && decad != 0){
        if(hundred) result += ' ';

        result += (decades[decad] || first_decades[digit]);
    }

    if(decad != '1' && digit && digit != '0'){
        if(decad) result += ' ';

        result += digits[digit];
    }

    if(!hundred && !decad && !digit || !hundred && !decad && digit == 0){
        result += 'zero';
    }

    return result;
}
