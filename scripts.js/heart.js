const storeData = [];

// heart section
document.getElementById("heart-icon").addEventListener("click", function (e) {
    e.preventDefault();
    const heartCount = document.getElementById('heart-Count').innerText;
    const heartCountNumber = parseInt(heartCount);
    const totalHeardCount = heartCountNumber + 1;
    console.log(totalHeardCount);
    document.getElementById('heart-Count').innerText = totalHeardCount;

})

// call section

document.getElementById('calling').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked');

    const coinCount = parseInt(document.getElementById('coin-count').innerText);
    console.log(coinCount);
    if (coinCount < 20) {
        alert('you have not available coin for calling');
        return;
    }

    const data = {
        name: "জাতীয় জরুরি সেবা22",
        date: new Date().toLocaleDateString()
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
                                <p class="text-[12px]">${data.date}</p>
                            </div>
                            <p class="text-[12px]">11:36:58 AM</p>
                        </div>
        `
        addHistory.appendChild(div);
    }

    const totalCoinCount = coinCount - 20;
    document.getElementById('coin-count').innerText = totalCoinCount;


})