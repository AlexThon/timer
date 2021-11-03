const timer = (arr) => {
    let userInput = arr.slice(2);
    for (let num of userInput) {
        if(parseInt(num)) {
            setTimeout(() => {
                process.stdout.write('\x07');
            }, num);
        }
    }
}

const input = process.argv;
timer(input);
