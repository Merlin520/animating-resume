// The code snippet you want to highlight, as a string
// var text = "body{color:red;}";

// // Returns a highlighted HTML string
// var css = Prism.highlight(text, Prism.languages.css);
// console.log(css)


//把code写到#code和style标签里
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code');
    domCode.innerHTML = prefix ||''//前缀
    let n = 0;
    let id = setInterval(function(){
    n = n +1;
    domCode.innerHTML = 
    Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0,n);
    domCode.scrollTop = domCode.scrollHeight;//自动滚动(最大高度)
    if(n >= code.length){
        window.clearInterval(id);
        fn.call();
    }
},50);
}

var result = `
    /*  
     * 你好面试官，
     * 我是来自深圳的梅林！
     * 谢谢你抽空给我面试的机会，
     * 这是一个小demo，展示时间约为1min，希望你喜欢！
    */
   
    * {
        transition : all 1.2s;
    }

    html {
        background:rgb(222,222,222);
        font-size:16px;
    }   
    
    #code {
       
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

#code {
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}

#paper {
    position:fixed;
    right:0;
    width:50%;
    height:100%; 
    background:white;
    display :flex;
    justify-content:center;
    align-items:center;
}

#paper > .content {
    background:greenyellow;
    height:100%;
    width:100%;
}

`
var result2 = `#paper{}`
var md = `
# 自我介绍
我叫梅林
1993年1月出生
自学前端1年
应聘前端开发岗位
 
# 技能介绍
Javascript Html Css

# 项目介绍
苹果风格轮播
画板
网易云音乐

# 联系方式
QQ  2491723965
Email  meiya90hou@163.com

欢迎来打扰！！！
`
// var n = 0;
// var id = setInterval(function(){
//     n = n +1;
//     code.innerHTML = result.substring(0,n);
//     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
//     styleTag.innerHTML = result.substring(0,n);

//     if(n >= result.length){
//         window.clearInterval(id);
//         fn2();
//         fn3(result);
//     }
// },10);
   
    writeCode('',result,function(){
        createPaper(function(){
            writeCode(result,result2,function(){
                writeMarkdown(md);
            })
        });
    });
  
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0;
    let id = setInterval(function(){
    n = n +1;
    domPaper.innerHTML = markdown.substring(0,n);
    domPaper.scrollTop = domPaper.scrollHeight;
    if(n >= markdown.length){
        window.clearInterval(id);
     fn.call();
    }
},30);

}

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre');
    content.className = 'content';
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

// function fn3(preResult){
//     var result = `
//     #paper{
//         width:100px;height:100px;
//         background:red;
//     }
//     `
//     var n = 0;
//     var id = setInterval(function(){
//         n = n +1;
//         code.innerHTML =
//         preResult + result.substring(0,n);
//         code.innerHTML = 
//         Prism.highlight(code.innerHTML, Prism.languages.css);
//         if(n >= result.length){
//             window.clearInterval(id);
//          }  
//     },50)
// }













