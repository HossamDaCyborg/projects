// creates an object of letters and saves it in the text file

const alpha= "abcdefghijklmnopqrstuvwxyz"
const g=alpha.split('');
console.log(g);

const main={};
for (const x of g) {
 main[x]={}
 for (const a of g) {
    main[x][a]=0
    
 }   
}
var fs = require('fs');

fs.writeFile('mynewfile3.txt', JSON.stringify(main,null,2), function (err) {
  if (err) throw err;
  console.log('Replaced!');         

});

