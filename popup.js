const picker=document.getElementById('picker');
const color=document.getElementById('color')
console.log(picker);
picker.addEventListener('click',async (e)=>{
const [tab]=await chrome.tabs.query({active:true,currentWindow:true})
console.log("clicked");
console.log(tab);
// const top=chrome.storage.sync.get('color')
chrome.scripting.executeScript({
    target:{tabId:tab.id},
    function:pickColour
},async (getresult)=>{

    color.innerText=getresult[0].result.sRGBHex;
    await navigator.clipboard.writeText(getresult[0].result.sRGBHex);
    

    

})






})

const pickColour=async ()=>{
    // document.body.style.backgroundColor="#1A1110";
    const eyedropper=new  EyeDropper();
    const data=await eyedropper.open();
    return data;
}



// 16 48 128
// Array(1)0: documentId: "44E4BD86E7FF816613B4B6B5549E9A40"frameId: 0result: {sRGBHex: 'rgba(255, 247, 233, 0)'}[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)