const valueInput = document.getElementById('value');
const unitFromSelect = document.getElementById('unit-from');
const unitToSelect = document.getElementById('unit-to');
const btnConvert = document.getElementById('btn-convert');
const resultDiv = document.getElementById('result');

const conversionRates = {
    'm-ft': 3.28084,
    'ft-m': 0.3048,
    'in-m': 0.0254,
    'm-in': 39.37,
    // Thêm các tỷ lệ chuyển đổi khác
};

btnConvert.addEventListener('click', convertUnit);

function convertUnit() {
    const value = parseFloat(valueInput.value);
    const unitFrom = unitFromSelect.value;
    const unitTo = unitToSelect.value;

    if (!conversionRates.hasOwnProperty(`${unitFrom}-${unitTo}`)) {
        resultDiv.textContent = 'Chưa hỗ trợ chuyển đổi giữa các đơn vị này.';
        return;
    }

    const conversionRate = conversionRates[`${unitFrom}-${unitTo}`];
    const convertedValue = value * conversionRate;

    resultDiv.textContent = `${value} ${unitFrom} = ${convertedValue.toFixed(2)} ${unitTo}`;
}