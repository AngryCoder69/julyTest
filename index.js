let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(item=>{
    if(item.profession=="developer"){
      console.log(developer)
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((item)=>{
    if(item.profession=="developer"){
      console.log(item);
    }
  });
}

function addData() {
  const add={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(add);
  console.log(arr)

function removeAdmin() {
  const alteredEmp=arr.filter(item=>item.profession!="admin");
  console.log(alteredEmp);
  arr=alteredEmp;
}

function concatenateArray() {
 const brr = [
    { id: 1, name: "don", age: "28", profession: "tea maker" },
    { id: 2, name: "back", age: "30", profession: "toilet cleaner" },
    { id: 3, name: "laren", age: "29", profession: "thief" },
  ];
const concatenateArray=arr.concat(brr);
console.log(concatenateArray);
}