/*音乐播放*/
let mucics = document.getElementById('audio')
document.body.addEventListener('mousemove', function() {
    setTimeout(() => {
        mucics.play();
    }, 200);
}, false);

/*表格*/
const navAll=document.querySelectorAll('.basic_nav div')
const divAll=document.querySelectorAll('.basic_content div')
for(let i=0;i<3;i++)
{
    navAll[i].setAttribute('index',i)
    navAll[i].onclick=function(){
        for(let i=0;i<3;i++){
            navAll[i].className=''
            divAll[i].className=''
        }
        this.className='active'
        divAll[this.getAttribute('index')].className='basic_show'
    }
}


