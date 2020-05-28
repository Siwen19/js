// console.log('hello member')

// 1. 写死了， 不能动态更新
// 2. js uuid npm 
// 3. 数据不合法， 数据不严谨 如何让不严谨的数据守规矩？
// 接口
// interface MembersEntity {
//     id: number;
//     name: string;
//     avatar: string;
// }
// const members: MembersEntity[] = [
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
// // console.log(
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
//     }).join("");
    // 把数组编成字符串
    const id = document.querySelector('#idInput');
    const nameInput = document.querySelector('#nameInput');
    const genderSelect = document.querySelector('#genderSelect');
    const phoneInput = document.querySelector('#phoneInput');
    const homeInput = document.querySelector('#homeInput');
    const avatarLink = document.querySelector('#avatarLink')
    const btn = document.querySelector('#submit');
    const tbody = document.querySelector('#member tbody') 
    const clearArray = [id, nameInput, genderSelect, phoneInput, homeInput, avatarLink]; 
    
    btn.addEventListener('click', () => {  
        tbody.innerHTML =  
    `<tr>
        <td>${id.value}</td>
        <td>${nameInput.value}</td>
        <td>${genderSelect.value}</td>
        <td>${phoneInput.value}</td>
        <td>${homeInput.value}</td>
        <td>
            <img src='${avatarLink.value}' />
        </td>
     </tr> 
    ` 
    })

    
    
