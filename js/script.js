function trianglecalculation(){
    const trianglelog =document.getElementById('triangle-log');
    const triangleText =trianglelog.value;
    const base =parseFloat(triangleText);
//     console.log(base);

    const trianglelog2 =document.getElementById('triangle-log2');
    const triangleBase2 =trianglelog2.value;
    const base2 =parseFloat(triangleBase2)
//     console.log(base2);
    const area =0.5 *base * base2;
//     console.log(area);
       const hello =document.getElementById('base-input')
       hello.innerText =area;
   
}

function ractangleLoadData(){
     const rectangleInputFile1 =document.getElementById('kalapoRectanlgeInput');
     const rectangleInputText =rectangleInputFile1.value;
     const inputTect1= parseFloat(rectangleInputText);
     
     const rectangleInputFile2 =document.getElementById('kalapoRectanlgeInput2');
     const rectangleInputText2 =rectangleInputFile2.value;
     const inputText2 =parseFloat(rectangleInputText2);
     const areaResult =inputTect1 * inputText2;
     const arereslut= document.getElementById('result');
     arereslut.innerText =areaResult;
     
    
}
