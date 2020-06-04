const css = require('css');
let htmlStr = `<html>
  <head></head>
  <body class="parent">
    <img src="a" alt="b"/>
    <span class="paint"></span>
    <div class="cls" id="myid"></div>
  </body> 
</html>`
let cssStr = `
.parent .cls {
    font-size: 16px;
}
#myid {
    background-color: red;
}
.paint {
    color: blue;
}
`
let rules = css.parse(cssStr).stylesheet.rules;
// console.log(JSON.stringify(rules, null, 2));
let currentToken = null;
let currentAttribute = null;
let stack = [{ type: 'document', children: [] }];
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));

function match(selector, ele) {
    if (!selector || !ele.attributes) {
        return false;
    }
    // #myid
    // {name: id, value：‘myid’}
    if (selector.charAt(0) === '#') {
        let idAttr = ele.attributes.find(e => e.name === 'id');
        if (idAttr && idAttr.value === selector.replace('#', '')) return true;
    } else if (selector.charAt(0) === '.') {
        let classAttr = ele.attributes.find(e => e.name === 'class');
        if (classAttr && classAttr.value === selector.replace('.', '')) return true;
    } else {
        if (ele.tagName === selector) return true;
    }
    return false;
}
function computerCss(ele) {
    // 计算 符合这个 ele 的所有 css 规则 || css 规则 应用到这个节点上面
    // 1: 靠 ele 属性 父节点，和 css 里面 选择器 匹配
    // 2：匹配 从后往前匹配  .parent .cls
    // tagName #id  .className
    // .parent .cls
    // div  || div .cls  || span #parentID .parent #id
    let elements = stack.slice(0).reverse();
    if (!ele.computerStyle) ele.computerStyle = {};
    // 所有 css 规则
    for (let rule of rules) {
        let selector = rule.selectors[0].split(' ').reverse();
        // 最后一项匹配上了
        if (!match(selector[0], ele)) {
            // 跳过本轮循环，往后的步骤
            continue;
        }
        // 看父级满不满足  
        // [{type: 'doc'}, {html}, [header]]
        // [#id .parent  #parentID  span]
        let j = 1;
        for (let i = 0; i < elements.length; i++) {
            if (match(selector[j], elements[i])) j++
        }
        // 匹配
        if (j >= selector.length) {
            // rule rule css 规则添加到 ele
            for (let delecare of rule.declarations) {
                const { property, value } = delecare;
                ele.computerStyle[property] = value
            }
        }
    }

}
function emit(token) {
    // console.log(token);
    let top = stack[stack.length - 1];
    if (token.type === 'startTag') {
        // push pop 处理配对
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        // 知道 attributes， 知道了element父节点
        computerCss(element);
        stack.push(element);
        // 作为栈顶的元素子节点，为了生成树
        // if (!top.children) top.children = [];
        // 内存地址相同！！
        top.children.push(element);
    } else if (token.type === 'endTag') {
        if (token.tagName !== top.tagName) {
            throw new Error('tagname match error')
        } else {
            stack.pop();
        }
    } else if (token.type === 'selfCloseToken') {
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        top.children.push(element);
    }
    currentToken = null;
}
function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c);
    }
}
function start(c) {
    if (c === '<') {
        return tagOpen
    } else {
        return start
    }
}
function tagOpen(c) {
    // <html>: html tag 由 a-zA-Z  div span p 
    // </html>
    //  h t m l
    // console.log(c);
    if (c === '/') {
        return endTagOpen
    } else if (c.match(/[a-zA-Z]/)) {
        currentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName
    }
}
function tagName(c) {
    if (c.match(/[a-zA-Z]/)) {
        currentToken.tagName += c;
        return tagName
    } else if (c.match(/[\t\n\f ]/)) {
        return beforeAttaibuteName
    } else if (c === '>') {
        // tag 拼接结束
        emit(currentToken);
        return start
    }
}
function beforeAttaibuteName(c) {
    if (c === '/') {
        currentToken.type = 'selfCloseToken';
        return tagName;
    } else if (c.match(/[a-zA-Z]/)) {
        currentAttribute = {
            name: c,
            value: ''
        }
        return attributeName
    } else if (c.match(/[\t\n\f ]/)) {
        return beforeAttaibuteName
    } else if (c === '>') {
        return tagName(c);
    }
}
function attributeName(c) {
    // class="cls"
    // ""
    if (c.match(/[a-zA-Z]/)) {
        currentAttribute.name += c;
        return attributeName;
    } else if (c === '=') {
        return attributeValue;
    }
}
function attributeValue(c) {
    // <div class="cls" id="myid" a="b"></div>
    if (c === '\"') {
        // nothing
        return attributeValue;
    } else if (c.match(/[a-zA-Z]/)) {
        currentAttribute.value += c;
        return attributeValue;
    } else {
        // 空格 >
        // 消耗了
        if (!currentToken.attributes) currentToken.attributes = [];
        currentToken.attributes.push(currentAttribute);
        currentAttribute = null;
        // 代理
        // 本状态内部处理完毕了这个 c，下一个状态也要针对 c 处理
        // 本状态内部处理完毕了这个 c，下一个状态处理到的字符就是 c 的后一个 字符
        return beforeAttaibuteName(c);
    }
}
function endTagOpen(c) {
    // </html>
    if (c.match(/[a-zA-Z]/)) {
        currentToken = {
            type: 'endTag',
            tagName: c
        }
        return tagName;
    }
}
