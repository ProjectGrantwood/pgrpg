function partition(val, amt, max) {
    let valCopy = val;
    let ratio = valCopy / (amt - 1)
    if (ratio < 1) {
        console.log('function partition() failed: argument "val" must be greater than or equal to argument "amt"');
    } else if (max < ratio) {
        console.log('function partition() failed: argument "max" must be greater than or equal to argument "val" divided by one less than argument "amt"')
    } else {
        let arrayOfVals = [];
        while (arrayOfVals.length < amt - 1) {
            let toAdd = Math.floor(Math.floor(Math.random() * ratio) + ratio / 2);
            valCopy -= toAdd;
            arrayOfVals.push(toAdd)
        }
        arrayOfVals.push(valCopy)
        for (let i = 0; i < arrayOfVals.length; i++) {
            while (arrayOfVals[i] <= 0) {
                for (let j = arrayOfVals.length - 1; j >= 0; j--) {
                    if (i !== j && arrayOfVals[j] > arrayOfVals[i] + 1) {
                        arrayOfVals[j] -= 1;
                        arrayOfVals[i] += 1;
                    }
                }
            }
            while (arrayOfVals[i] >= max) {
                for (let j = arrayOfVals.length - 1; j >= 0; j--) {
                    if (i !== j && arrayOfVals[j] < arrayOfVals[i] - 1) {
                        arrayOfVals[j] += 1;
                        arrayOfVals[i] -= 1;
                    }
                }
            }
        }
        return arrayOfVals;
    }
}