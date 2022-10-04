const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#calculate-hypotenuse-btn');
const outputhypotenuse=document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumofsquare= a*a + b*b;
    return sumofsquare;
}

function calculateHypotenuse(){
    a=Number(sides[0].value)
    b=Number(sides[1].value)
    if(a>0 && b>0){
        const sumofsquare= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
        const lengthOfHypotenuse=Math.sqrt(sumofsquare);
        outputhypotenuse.innerText="The length of Hypotenuse is "+lengthOfHypotenuse;
    }
    else{
        outputhypotenuse.innerText="Input cannot be negative and empty ";
    }
 
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);