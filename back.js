function factorial(n) {
    if (n < 0) return "Факториал не определен для отрицательных чисел";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    if (numberInput === "") {
        document.getElementById('result').textContent = "Пожалуйста, введите число.";
        return;
    }
    const number = parseInt(numberInput);
    const result = factorial(number);
    document.getElementById('result').textContent = `Факториал ${number} равен ${result}`;
});


