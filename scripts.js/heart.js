const storeData = [];

// heart section

const heartButton = document.getElementsByClassName('heart-icon');
for(let j =0; j<heartButton.length; j++ ){
    heartButton[j].addEventListener("click", function (e) {
    e.preventDefault();
    const heartCount = document.getElementById('heart-Count').innerText;
    const heartCountNumber = parseInt(heartCount);
    const totalHeardCount = heartCountNumber + 1;
    console.log(totalHeardCount);
    document.getElementById('heart-Count').innerText = totalHeardCount;

})

}

// call section
const callButton = document.getElementsByClassName('call-button');
for(let i =0;i<callButton.length; i++){


    callButton[i].addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked');

    const coinCount = parseInt(document.getElementById('coin-count').innerText);
    console.log(coinCount);
    if (coinCount < 20) {
        alert('you have not available coin for calling');
        return;
    }

    const data = {
        name: 'sujon',
        number:'555',
        time: new Date().toLocaleTimeString("en-US", { hour12: true })
    }
    storeData.push(data);

    const addHistory = document.getElementById('add-history');
    addHistory.innerText = "";
    for (const data of storeData) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FFE3E2] p-5 rounded-2xl mt-3">
                            <div>
                                <h1 class="font-extrabold text-[12px]">${data.name}</h1>
                                <p class="text-[12px]">${data.number}</p>
                            </div>
                            <p class="text-[12px]">${data.time}</p>
                        </div>
        `
        addHistory.appendChild(div);
    }

    const totalCoinCount = coinCount - 20;
    document.getElementById('coin-count').innerText = totalCoinCount;

});
}


// call history clear button
document.getElementById('clearAll-button').addEventListener('click',function(){
    const removeHistoryContainer = document.getElementById('add-history').style.display= "none";

})
