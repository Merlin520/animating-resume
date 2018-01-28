// The code snippet you want to highlight, as a string
// var text = "body{color:red;}";

// // Returns a highlighted HTML string
// var css = Prism.highlight(text, Prism.languages.css);
// console.log(css)

var result = `
    /*  
     * 你好召唤师！
     * 我是来自德玛西亚的盖伦，
     * 很乐意为您效劳！
    */
   
    * {
        transition : all 1.2s;
    }

    html {
        background:rgb(222,222,222);
        font-size:16px;
    }   
    
    #code {
        border:1px solid red;
        padding:16px;
    }

    /* 接下来是代码高亮 */

    .token.selector{
        color: #690
    }

    .token.property{
        color: #905
    }

    .token.function{
        color: #DD4A68    
    }

    /* 加点3D效果 */
    #code{
        transform: rotate(360deg)  
    }

    /* 下面是我的自我介绍 */
    /* 我需要一个白板 */
`



var n = 0;
var id = setInterval(function(){
    n = n +1;
    code.innerHTML = result.substring(0,n);
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
    styleTag.innerHTML = result.substring(0,n);

    if(n >= result.length){
        window.clearInterval(id);
        fn2();
        fn3();
    }
},10);


function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(){
    var result = `
    #paper{
        width:100px;height:100px;
        background:red;
    }
    `
    var n = 0;
    var id = setInterval(function(){
        n = n +1;
        code.innerHTML = code.innerHTML + result[n-1]
        if(n >= result.length){
            window.clearInterval(id);
         }  
    },50)
}













