function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
  }
  
function addClassToVisibleElements() {
var aosElements = document.querySelectorAll(".aos");
aosElements.forEach(function (aosElement) {
    if (!isElementInViewport(aosElement)) aosElement.classList.add("ed");
    else aosElement.classList.remove("ed");
});
}
  
document.addEventListener("scroll", addClassToVisibleElements);
addClassToVisibleElements();

// Welcome


// show api
let imgIndex=1;
let ramdonCount=1;
function showimg(){
    while(imgIndex>13){
        imgIndex-=13;
    }
    let imgid='img'+imgIndex
    let img=document.getElementById(imgid)
    let url='https://picsum.photos/600/600?random='+ramdonCount
    console.log(url)
    img.setAttribute('src',url)
    ramdonCount++;
    imgIndex++
}

function showcode(id){
    if(document.getElementById(id).style.visibility=='visible'){
        document.getElementById(id).style.visibility='hidden'
    }else{
        document.getElementById(id).style.visibility='visible'
    }
}


// contact
function showContactWay(con){
    document.getElementById('contactway').innerHTML=con
}

