let onbulb1=document.getElementById("onbulb")
let imgcat=document.getElementById("imagecat")
let son=document.getElementById("switchon")
let onb=document.getElementById("onbutton");
let ofb=document.getElementById("offbutton")
function obutton()
{
     onbulb1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
     imgcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
     son.textContent="SWITCH-ON"
     
     onb.style.backgroundColor="green"
     ofb.style.backgroundColor="gray"
}
function ofbutton()
{
    onbulb1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    imgcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    son.textContent="SWITCH-OFF"
    
     onb.style.backgroundColor="gray"
     ofb.style.backgroundColor="red"
}