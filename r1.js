let btn=document.querySelector("#additem");
let tbody=document.querySelector("#tbody");
let gamnt=document.querySelector("#s1");
let s1=document.querySelector("#s2");
let s2=document.querySelector("#s3");
let print=document.querySelector("#print");
let qun,prc,tp;
btn.addEventListener("click",()=>{
    let row=document.createElement("tr");
    row.innerHTML=`
    <td><input type="text"class="name"></td>
    <td><input type="number"class="quantity" value=1 min=1></td>
    <td><input type="number"class="price" min=0></td>
    <td class="total">00</td>`;
    tbody.append(row);
    row.addEventListener("input",()=>{
     let qnt=Number(row.querySelector(".quantity").value);
     let prc=Number(row.querySelector(".price").value);
     let ttl=row.querySelector(".total");
     let sum=qnt*prc;
     ttl.innerText=sum;
     calc(); 
    });
})
function calc(){
    let x=document.querySelectorAll("#tbody tr");
    let y=0;
    x.forEach((i)=>{
          let z=Number(i.querySelector(".total").innerText)||0;
          y+=z;
    });
    gamnt.innerText=y;
    return y;
}
s2.addEventListener("input,()=>{
      let w=s1.getBoundinClientRect().width;
      s2.style.width=w+"px";
      let gvn=Number(given.value);
      let lft=calc()-gvn;
      s3.innerText=lft;
}
print.addEventListener("click",()=>{
    window.print();
});


