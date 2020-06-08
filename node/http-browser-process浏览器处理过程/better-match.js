function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(char) {
    if (char === 'a') {
        return foundA;
    } else {
        return start;
    }
}

function foundA(char) {
if (char === 'b') {
    return foundB;
} else {
    return start;
}
}

function foundB(char) {
    if (char === 'c') {
        return end;
    } else {
        return start;
    }
}

function end() {
    return end;
}

console.log(match('I am ac'))