var result = [];

function multiples(a,b){
    for (let i = a; i <= b; i=i+a) {
        if (i%a === 0){
            result.push(i);
        }
    };

return result;
}

module.exports = multiples;