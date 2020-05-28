// console.log('hello member')
// 1. 写死了， 不能动态更新
// 2. js uuid npm 
// 3. 数据不合法， 数据不严谨 如何让不严谨的数据守规矩？
// 接口
// interface MembersEntity {
//     id: number
//     name: string
//     avatar: string
// }
// const members = [
//     {
//         id: 1314,
//         name: '大黄',
//         avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
//     },
//     {
//         id: 520,
//         name: '小徐',
//         avatar: 'https://image.so.com/z?a=viewPage&ch=wallpaper&src=home_wallpaper&ancestor=list&clw=251#grpid=e53e14cd7597b798b069a0ea1bbae843&id=d93a02f4b03e3c1f8d02f1f4587c4390&prevsn=-1&currsn=0'
//     },
//     {
//         id: 10000,
//         name: '大佬',
//         avatar: 'https://image.so.com/z?a=viewPage&ch=wallpaper&src=home_wallpaper&ancestor=list&clw=251#id=e80b2c288d4c0f64ed6debdaa44314f1&grpid=d7e1a275a925d56461edcd4626d32e02&currsn=0'
//     }
// ]
// console.log(members)
// const tbody = document.querySelector('#member tbody')
// // 从 json 数组 变成了 html 数组 tbody 最想要的
// console.log(
// tbody.innerHTML = members.map((member) => {
//         return `
//             <tr>
//                 <td>${member.id}</td>
//                 <td>${member.name}</td>
//                 <td>
//                     <img src="${member.avatar}" />
//                 </td>
//             </tr>
//         `
//     }).join("") 
// )
// // 把数组编成字符串
var idInput = document.querySelector('#idInput')
var nameInput = document.querySelector('#nameInput')
var femaleSel = document.querySelector('#female')
var maleSel = document.querySelector('#male')
var phoneInput = document.querySelector('#phoneInput')
var homeInput = document.querySelector('#homeInput')
var avatarLink = document.querySelector('#avatarLink')
var btn = document.querySelector('#add')
var tbody = document.querySelector('#member tbody')  

btn.addEventListener('click', function () {
  var genderSelect = femaleSel.checked == true ? femaleSel.value : maleSel.value
  tbody.innerHTML +=
    '<tr>\n        <td>' + idInput.value + '</td>\n        <td>' + nameInput.value + '</td>\n        <td>' + genderSelect + '</td>\n        <td>' + phoneInput.value + '</td>\n        <td>' + homeInput.value + "</td>\n        <td>\n            <img src='" + avatarLink.value + "' />\n        </td>\n     </tr> \n    "
})
