document.getElementById('24').addEventListener('click', function() {
    const dateTime = document.getElementById('dateTimeInput').value;
    const where = document.querySelector('input[name="where"]:checked').value === "mine" ? "меня" : "тебя";
    const what = document.querySelector('input[name="what"]:checked').value;
    const whatch = document.querySelector('input[name="whatch"]:checked').value;

    const resultElement = document.getElementById('resultElement');
    resultElement.textContent = `${dateTime} у ${where} будем есть ${what} и смотреть ${whatch} (отправь это мне скрином)`;
});