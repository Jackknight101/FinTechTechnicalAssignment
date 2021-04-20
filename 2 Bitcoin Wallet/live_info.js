const crypt_comp_url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BSV,BCH,XRP,ETH&tsyms=GBP,USD,EUR"

const my_api_key= "7fdd6a76832f296f9579100f25868ed7b30a5aed46915fdfe2e9c3c26a075879"

const my_crypto_url= crypt_comp_url + my_api_key


async function getcrypto()  { 

    const response = await fetch(my_crypto_url); 
    
    const data = await response.json();

    document.getElementById('BTC').textContent=data.BTC.GBP;
    document.getElementById('BSV').textContent=data.BSV.GBP ;
    document.getElementById('BCH').textContent=data.BCH.GBP;
    document.getElementById('XRP').textContent=data.XRP.GBP;
    document.getElementById('ETH').textContent=data.ETH.GBP;

    
} ;

getcrypto();


const Quandl_url= "https://www.quandl.com/api/v3/datasets/EOD/AAPL?start_date=2017-12-28&end_date=2017-12-28&api_key=N9vQgebCHLyo9-y2PkHP"


async function getqaundl(){

const response = await fetch(Quandl_url);
const quandldata = await response.json()

document.getElementById('quandl').textContent=quandldata.dataset.data[0][11]


}



getqaundl();

const Quandl_url2= "https://www.quandl.com/api/v3/datasets/EOD/DIS?start_date=2017-12-28&end_date=2017-12-28&api_key=N9vQgebCHLyo9-y2PkHP"


async function getqaundl2(){

const response = await fetch(Quandl_url2);
const quandldata = await response.json()

document.getElementById('quandl1').textContent=quandldata.dataset.data[0][11]


}

getqaundl2();





const Quandl_url3= "https://www.quandl.com/api/v3/datasets/EOD/HD?start_date=2017-12-28&end_date=2017-12-28&api_key=N9vQgebCHLyo9-y2PkHP"
async function getqaundl3(){

  const response = await fetch(Quandl_url3);
  const quandldata = await response.json()
  
  document.getElementById('quandl2').textContent=quandldata.dataset.data[0][11]
  
  
  }
  
  getqaundl3();





  const Quandl_url4= "https://www.quandl.com/api/v3/datasets/EOD/MSFT?start_date=2017-12-28&end_date=2017-12-28&api_key=N9vQgebCHLyo9-y2PkHP"
  async function getqaundl4(){
  
    const response = await fetch(Quandl_url4);
    const quandldata = await response.json()
    
    document.getElementById('quandl3').textContent=quandldata.dataset.data[0][11]
    
    
    }
    
    getqaundl4();



    const Quandl_url5= "https://www.quandl.com/api/v3/datasets/EOD/BA?start_date=2017-12-28&end_date=2017-12-28&api_key=N9vQgebCHLyo9-y2PkHP"
    async function getqaundl5(){
    
      const response = await fetch(Quandl_url5);
      const quandldata = await response.json()
      
      document.getElementById('quandl4').textContent=quandldata.dataset.data[0][11]
      
      
      }
      
      getqaundl5();

  