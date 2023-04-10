function fibonacci(num) {
// your code here
	let n1=0,n2=1,next;
	for(int i=1;i<=num;i++){
		next = n1 + n2;
        n1 = n2;
        n2 = next;
	}
	return n1;
}

module.exports = fibonacci;
