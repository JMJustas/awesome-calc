function sum(a, b) {
	return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
	if (b === 0) {
		throw new Error('Division by zero is not allowed');
	}
    return a / b;
}

function main() {
	const operand1 = parseInt(process.argv[2]);
	const operation = process.argv[3];
	const operand2 = parseInt(process.argv[4]);
	
	switch(operation) {
		case '+':
			console.log(sum(operand1, operand2));
			break;
        case '-':
            console.log(sub(operand1, operand2));
            break;
		case '/':
			console.log(div(operand1, operand2));
			break;
		default:
			console.error(`Operation ${operation} is not supported`);
			process.exit(1);
	}
}

main()
