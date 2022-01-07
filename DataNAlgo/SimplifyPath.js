/**
 * @param {string} path
 * @return {string}
 */

// ./ => makes no difference
// ../ => deletes the previous directory / step
//split string into array 
//while loop through the array... 
//  get this value, if it is null continue
//  else if the value is significant add the value to the output array
//  else if it is .. the remove the previous value 
 var simplifyPath = function(path) {
    const dirArray = path.split('/');

    const resArray = [];
    for (let i=0; i < dirArray.length; i++) {
        const dir = dirArray[i];

        if (!dir) continue;

        if (dir ==='.') continue;

        if (dir === '..') resArray.pop();
        else resArray.push(dir);
    }

    return '/' + resArray.join('/');
};

console.log( simplifyPath('/../enoch/./femi/tolu/../rit//re////yil/'));