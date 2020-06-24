const users = [
    { id: 1, name: 'john', age: 28, sex: 'male' },
    { id: 2, name: 'bob', age: 33, sex: 'male' },
    { id: 3, name: 'tom', age: 22, sex: 'male' },
    { id: 4, name: 'alice', age: 18, sex: 'female' },
    { id: 5, name: 'rihana', age: 35, sex: 'female' },
    { id: 6, name: 'sara', age: 20, sex: 'female' }
]
// 封装 类
function SQL(table) {
    this.table = table; //  数据源
    // 结果的保存变量   当下的结果  保存每一步操作过后的结果
    this._result = null;    //  结果    
    this._getRows = function() {
        return this._result ? this._result : this.table;
    }
}
// 条件动作
SQL.prototype.where = function (predicate) {
    // console.log(predicate); 
    var rows = this._getRows();
    // console.log(rows['female']);
    // 如果 rows 是 数组 不然是 对象 的话
    if (Array.isArray(rows)) {
        this._result = rows.filter(predicate);
    } else {
        // object:
        // 拿出每一个数组 -> filter -> 返回 object 
        console.log(Object.keys(rows)); 
        this._result = Object.keys(rows)
        .reduce(function(groups, group) {
            groups[group] = rows[group].filter(predicate);
            return groups;
        }, {})
    }
    return this;
}
SQL.prototype.groupBy = function (key) {
    // console.log(key);
    var rows = this._getRows(); //  私有方法
    // console.log(rows);
    this._result = rows.reduce(function(groups, row) {  
        // console.log(row);
        var group = row[key]; 
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(row);
        // console.log(groups);
        return groups;
    }, {})
    console.log(this._result); 
    console.log(this); 
    return this;    //  链式调用
}
SQL.prototype.getResult = function() {
    return this._result;
}
var sql = new SQL(users);

var predicate = function(row) {
    return row.age < 30;
}
var result = sql
.groupBy('sex')
.where(predicate)
.getResult(); 
console.log(result);