const timer = (arr) => {
    let userInput = arr.slice(2);
    for (let num of userInput) {
        if(parseInt(num) &&parseInt(num) >= 0) {
            setTimeout(() => {
                process.stdout.write('\x07');
            }, num);
        }
    }
}

const input = process.argv;
timer(input);
