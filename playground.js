// const fetch = require('node-fetch');
// var fs = require('fs');

// const jackson = fetch('https://popular-words-api.herokuapp.com/api/words/list?minrank=1&maxrank=10000');

// jackson.then(res=>res.json()).then((gg)=>{
//     const len ={};
//     for(let word of gg){
//         if(!len[word.length]){
//             len[word.length]=1
//         }
//         else{
//             len[word.length]+=1
//         }

//     }
//     for(let s in len){
//         len[s]=(len[s]/10000)*1000
//     }
   
// fs.appendFile('myPercObj.js', JSON.stringify(len,null,2), function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });
// })
// for (let s=0 ;s<3 ; s++)
// {
//     console.log(s);
// }

let word =""
let gr=["s","g","k","l","n"];
for (let a of gr){
    word+=a
}
console.log(word);
