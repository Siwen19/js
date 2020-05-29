let htmlStr = `<html>
<head></head>
<body>
    <div></div>
</body>
</html>`;
// 有限状态机 FSM
// token html tag
let curentToken = null;
parse(htmlStr);
function emit(token) {
    console.log(token.tagName);
    curentToken = null;
}
function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c);
    }
}
function start(c) {
    if (c === '<') {
        return tagOpen;
    } else {
        return start;
    }
}
function tagOpen(c) {
    if (c === '/') {
        return endTagOpen;
    } else if (c.match(/[a-zA-Z]/)) {
        curentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName
    }
}
function tagName(c) {
    if (c.match(/[a-zA-Z]/)) {
        curentToken.tagName += c;
        return tagName;
    } else if (c === '>') {
        emit(curentToken);
        return start;
    }
}
function endTagOpen(c) {
    if (c.match(/[a-zA-Z]/)) {
        curentToken = {
            type: 'endTag',
            tagName: c
        }
        return tagName;
    }
}