
function calculator(input, val) {


    if (input === 'op') {

        if (val === 'c') {

            document.getElementById('result').value = ''

        }

        if (val === '+' || val === '-' || val === '*' || val === '/' || val === '.') {
            document.getElementById('result').value += val
        }
        if (val === '=') {
            var val = eval(document.getElementById('result').value)
            document.getElementById('result').value = val

        }
    }
    else if (input === 'val') {

        document.getElementById('result').value += val
    }


}
