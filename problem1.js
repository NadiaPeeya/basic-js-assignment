//problem 1
function seerToMon(seer) {
    //checking if input is a number or not  
    if (typeof seer == 'number') {
        if (seer >= 0) {
            //1 mon = 40seer
            const mon = seer / 40;
            return mon;
        }
        return 'please enter a positive number';
        //returning an error message
    }
    return 'please enter number';
    //returning an error message
}

const monIs = seerToMon(80);
console.log(monIs);
//printing value
