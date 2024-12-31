document.getElementById('convertBtn').addEventListener('click', () => {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp = '';
    let convertedUnit = '';

    switch (unit) {
        case 'Celsius':
            convertedTemp = `${(temperature * 9/5) + 32} °F (Fahrenheit)`;
            convertedTemp += ` | ${temperature + 273.15} K (Kelvin)`;
            break;
        case 'Fahrenheit':
            convertedTemp = `${(temperature - 32) * 5/9} °C (Celsius)`;
            convertedTemp += ` | ${((temperature - 32) * 5/9) + 273.15} K (Kelvin)`;
            break;
        case 'Kelvin':
            convertedTemp = `${temperature - 273.15} °C (Celsius)`;
            convertedTemp += ` | ${(temperature - 273.15) * 9/5 + 32} °F (Fahrenheit)`;
            break;
    }

    resultDiv.innerHTML = `Converted Temperature: <br>${convertedTemp}`;
});
