const base = document.querySelector('#base')
const height = document.querySelector('#height')
const button = document.querySelector('#check-Btn')
const output = document.querySelector('#output')

function calculateProduct(a,b){
    const product = a*b;
    return product;
    // console.log(product)
}

button.addEventListener('click', function(){
    const product = calculateProduct(Number(base.value), Number(height.value))
    const area = product/2;
    output.innerText = 'the area of the triangle is : ' + area;
})

// function calculateArea(){
//     const base = Number(inputs[0].value);
//     const height = Number(inputs[1].value);

//     const area = (base*height)/2 ;

//     output.innerText = `Area of the Triangle is ${area}`;

// }