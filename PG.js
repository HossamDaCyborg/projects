const br ={
    e:{
        e:0,
        k:0,
    },
    k:{
        e:0,
        k:0
    }
 
}
let j=['ekekek','kekekekekkkekekeke'];

for( const a of j){
    for (let l=0 ; l<a.length-1;l++){
        br[a[l]][a[l+1]]++;

    }
};
console.log(JSON.stringify(br,null,2));

// const a="dgudfgsdf"
// console.log(a.length);
// console.log(a[a.length -1])