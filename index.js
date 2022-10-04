const sides=document.querySelectorAll('.side-input');
const outputArea=document.querySelector('#output');
const calculateAreaOfTriangleBtn=document.querySelector('#area-of-triangle-btn');

function sideProduct(a,b){
const product= a*b;
return product;
}

function areaOfTriangle(){
    a=Number(sides[0].value)
    b=Number(sides[1].value)
  if(a>0 && b>0){
    const product=sideProduct(Number(sides[0].value),Number(sides[1].value));
    const Area=1/2*product;
    outputArea.innerText="The area of Triangle is "+Area;
  }
  else{
    outputArea.innerText="Sides should be greater than 0.Input cannot be Negative and Empty.";
  }

    

}

calculateAreaOfTriangleBtn.addEventListener("click",areaOfTriangle);