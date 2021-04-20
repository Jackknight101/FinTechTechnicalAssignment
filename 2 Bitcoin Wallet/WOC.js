const woc_api_url= "https://api.whatsonchain.com/v1/bsv/main/address/1GJ3x5bcEnKMnzNFPPELDfXUCwKEaLHM5H/balance"

async function  getwoc() {

const response= await fetch(woc_api_url);

const data = await response.json();


document.getElementById('BAL').textContent=data.confirmed;
document.getElementById('BAL1').textContent=data.unconfirmed;

    
} getwoc();


