const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(predicate) {
    const newArray = [];
    for (let i=0; i< this.length; i++) {
        if(predicate(this[i])) {
            newArray.push(this[i]);
        }
    }

        return newArray;

}

result = words.myFilter(word => word.length > 6)
console.log(result);
// résultat attendu : ['exuberant', 'destruction', 'present']