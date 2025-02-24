//Скрин 1
//1

function factorial(n) {
    if (n < 0) return "Факториал не определен для отрицательных чисел";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

//2
function maxlength(text) {
    const words = text.split("");
    let maxlength = 0;
    for (let word of words){
        const ignor_list = word.replace(/[.,!?]*/g, '').trim();
        if (ignor_list.length > maxlength) {
            maxlength = ignor_list.length;
        }
    }
    return maxlength
}

//3
function maxlist(arr) {
    return arr.map(sublist => Math.max(...sublist));
}

//4
function crop(text, length) {
    return text.slice(0, length);
}

//5
function reg(text) {
    return text.split('').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(''); 
}

//6
function copy(arr1, arr2, n) {
    const newArr = arr2.slice(); 
    for (let i = 0; i < arr1.length; i++) {
        newArr[n + i] = arr1[i];
    }
    return newArr;
}

//8
function calctext(arr) {
    const [str1, str2] = arr.map(str => str.toLowerCase());
    return [...str2].every(char => str1.includes(char));
}

//9
function createArr(arr, size) {
    const newarr = [];
    for (let i = 0; i < arr.length; i+=size) {
        const n = arr.slice(i, i+size);
    }
    return newarr
}

//10
function rec(arr, n) {
    if (n <= 0) {
        return;
    }
    arr.push(n);
    rec(arr, n-1)
}


//Скрин 2
//2.1(map)
function multiplyElem(arr) {
    return arr.map(elem => elem*2);
}

//2.1(filter)
function evenElem(arr) {
    return arr.filter(elem => elem%2 === 0);
}

//2.1(find)
function findElem(arr) {
    return arr.find(elem => elem===5);
}

//2.1(some)
function ftElem(arr) {
    return arr.some(elem => elem < 0);
}

//2.1(every)
function posElem(arr) {
    return arr.every(num => num > 0);
}

//скрин 3
//3.1
function masplus(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    let mathAll = 0
    for (let i = min; i <= max; i++) {
            mathAll += 1;
    }
    return mathAll
}

//3.2
function elemuniq(arr1, arr2) {
    const uniquearr1 = arr1.filter(elem => arr2.includes(elem))
    const uniquearr2 = arr2.filter(elem => arr1.includes(elem))
    return [...uniquearr1, ...uniquearr2]
}

//3.3
function reElem(arr, args) {
    return arr.filter(elem => args.includes(elem));
}

//3.4
function searchName(collection, source) {
    return collection.filter(obj => {
        return keys.every(key => obj[key] === source[key]);
    });
}

//3.6
function reWord(sentence, target, replacement) {
    const regex = new RegExp(target, 'gi');
    return sentence.replace(regex, (match) => {
        const Cap = match.charAt(0) === match.charAt(0).toUpperCase();
        if (Cap) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        } else {
            return replacement.toLowerCase();
        }
    });
}

//3.7
function fearNotLetter(str) {
    const charArr = str.split('');
    const CharS = str.charCodeAt(0);
    const CharE = str.charCodeAt(str.length - 1);
    for (let i = CharS; i <= CharE; i++) {
        if (charArr.includes(String.fromCharCode(i))) {
            return String.fromCharCode(i);
        }
    }
    return undefined;
}

//3.9
function Html(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

//3.10
function sum(n) {
    let sum = 0
    for (let num = 2; num < n; num++) {
        let x = true;
        for (let i = 2; i*i <= num; i++) {
            if (num % i === 0) {
                x = false;
                break;
            }
        }
        if(x) {
            sum += num;
        }
    }
    return sum;
}

//3.11
function dropElem(arr, func) {
    while (arr.length > 0 && func(arr[0])) {
        arr.shift(); 
    }
    return arr; 
}

//3.12
function masredaction(arr1) {
    const res = []
    function edit(arr2) {
        for (let item of arr2) {
            if (Array.isArray(item)) {
                edit(item);
            }
            else {
                res.push(item);
            }
        }
    }
    edit(arr1);
    return res;
}

//3.13
function add(a) {
    if (arguments.length === 1) {
        return function(b) {
            return a + b;
        };
    }
    return a + arguments[1];
}
