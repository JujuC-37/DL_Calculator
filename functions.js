let $buttons = document.getElementsByTagName('button');
let $result = document.getElementsByClassName('reset')[0];

let nb = null;
let operation = null;
let result = null;

for(let b of $buttons) {

    b.addEventListener('click', e => {
        let $clickedElement = e.target;
        let classes = $clickedElement.classList;

        if(classes.contains('number')) {
            if(!result) {
                result = $clickedElement.innerHTML;
            }
            else if(!operation) {
                result = result.concat($clickedElement.innerHTML);
            }
            else if(!nb) {
                nb = $clickedElement.innerHTML;
            }
            else {
                nb = nb.concat($clickedElement.innerHTML);
            }
        }
        else if(classes.contains('operation')) {
            if(!operation) {
                result = parseFloat(result);
                operation = $clickedElement.innerHTML;
            }
            else {
                operation = $clickedElement.innerHTML;
                nb = parseFloat(nb);
                result = calculate(result, nb, operation);
                document.querySelector('.result').innerHTML = result;

                nb = null;
            }
        }
        else if(classes.contains('equal')) {
            result = calculate(result, nb, operation);
            document.querySelector('.result').innerHTML = result;

            operation = '';
            nb = '';
        }
        else if(classes.contains('reset')) {
            nb = '';
            operation = null;
            result = null;
            document.querySelector('.result').innerHTML = '0';
        }
    });
}

function calculate(nb1, nb2, operation) {
    let result = nb1;

    switch(operation) {
        case '+': result = +nb1 + +nb2;
                break;
        case '-': result = nb1 - nb2;
                break;
        case '*': result = nb1 * nb2;
                break;
        case '/': result = nb1 / nb2;
                break;
        default: console.log('pb switch');
    }
    return result;
}