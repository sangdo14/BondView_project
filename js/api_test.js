const serviceKey = 'VRfOolZbCzTwjY9lqgLbTRXn6oRYkJj%2BQRBuBJX8C3OMuFTpT5r0ND57XoBmfbEuZbqM14cNvYJkZzjufmeXbg%3D%3D';
const pageNo = 1;
const numOfRows = 3;
const basDt = 20250401;
const resultType = 'json';
const base_url = 'https://apis.data.go.kr/1160100/service/GetBondSecuritiesInfoService/getBondPriceInfo';
const req_url = `${base_url}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&resultType=${resultType}&basDt=${basDt}`;


fetch(req_url)
  .then(data => {
    return data.json();
  })
  .then(json => {
    console.log(json.response.body.items.item)
    const bondData = json.response.body.items.item;

    bondData.forEach((data, index)=>{
      console.log('ISIN코드',data.isinCd)
      console.log('종목명',data.itmsNm)
      console.log('종목명',data.itmsNm)

    })
  });