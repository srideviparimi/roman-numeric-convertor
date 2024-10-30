const convertButton=document.getElementById("convert-btn");
const number=document.getElementById("number");
const output=document.getElementById("output");
const clearButton=document.getElementById("clear");
convertButton.addEventListener("click",()=>{
  if(number.value===""){
    output.classList.add("alert");
    output.innerText="Please enter a valid number";
    
  }
  else if(number.value<1){
   output.classList.add("alert");
   output.innerText="Please enter a number greater than or equal to 1";
   }
  else if(number.value>3999){
   output.classList.add("alert");
   output.innerText=" Please enter a number less than or equal to 3999. ";
  }
  else{
    convert(number.value);
     
  }
  
});

const convert=(num)=>{
  output.classList.remove("alert");

  const referenceArr=[
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
  ]
  const res=[];
  referenceArr.forEach(function (arr){
 while(num>=arr[1]){
   res.push(arr[0]);
   num-=arr[1];
 }

  });
 output.innerText=res.join("");
}

clearButton.addEventListener("click",()=>{
  output.classList.remove("alert");
  number.value="";
  output.innerText="";
    
})