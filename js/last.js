const last = document.getElementById('last');

setInterval(() => {
  fetch('https://coinscontrol.com/Api/GetTicker/SABR_BTC')
    .then(response => response.json())
    .then(data => last.innerHTML = data.sabr.last)  
}, 6000)