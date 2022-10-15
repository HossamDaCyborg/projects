const fetch =require('node-fetch');

var fs = require('fs');

// creates an object of letters and saves it in the text file

const alpha= "abcdefghijklmnopqrstuvwxyz"
const g=alpha.split('');
const main={};
for (const x of g) {
 main[x]={}
 main[x]["first"]=0
 main[x]["total"]=0
 for (const a of g) {
    main[x][a]=0
    
 }   
};




// const response =  fetch('https://popular-words-api.herokuapp.com/api/words/list?minrank=1&maxrank=5');
// const data = await response.json();

// console.log(data);

fetch('https://popular-words-api.herokuapp.com/api/words/list?minrank=1&maxrank=10000').then(res=> res.json()).then((words)=>{
    
for( const a of words){
    main[a[0]]["first"]++;
    for (let l=0 ; l<a.length-1;l++){
        main[a[l]]["total"]++;
        main[a[l]][a[l+1]]++;

    }
};

fs.writeFile('myObject.json', JSON.stringify(main,null,2), function (err) {
    if (err) throw err;
    console.log('Replaced!');         
  
  });
}
);
