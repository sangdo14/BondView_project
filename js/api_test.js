const serviceKey = 'VRfOolZbCzTwjY9lqgLbTRXn6oRYkJj%2BQRBuBJX8C3OMuFTpT5r0ND57XoBmfbEuZbqM14cNvYJkZzjufmeXbg%3D%3D';
// Qt
const pageNoQt = 1;
const numOfRowsQt = 3;
const basDtQt = 20250401;
const resultTypeQt = 'json';
const baseUrlQt = 'https://apis.data.go.kr/1160100/service/GetBondSecuritiesInfoService/getBondPriceInfo';
const reqUrlQt = `${baseUrlQt}?serviceKey=${serviceKey}&pageNo=${pageNoQt}&numOfRows=${numOfRowsQt}&resultType=${resultTypeQt}&basDt=${basDtQt}`;


fetch(reqUrlQt)
  .then(data => {
    return data.json();
  })
  .then(json => {
    console.log(json.response.body.items.item)
    const bondData = json.response.body.items.item;

    bondData.forEach((data, index)=>{
      console.log('ISIN코드',data.isinCd)
      console.log('종목명',data.itmsNm)
    })
  });


  // Pb
const pageNoPb = 1;
const numOfRowsPb = 3;
const basDtPb = 20250401;
const resultTypePb = 'json';
const baseUrlPb = 'http://apis.data.go.kr/1160100/service/GetBondIssuInfoService/getBondBasiInfo';
const reqUrlPb = `${baseUrlPb}?serviceKey=${serviceKey}&pageNo=${pageNoPb}&numOfRows=${numOfRowsPb}&resultType=${resultTypePb}&basDt=${basDtPb}`;

fetch(reqUrlPb)
  .then(data => {
    return data.json();
  })
  .then(json => {
    console.log(json.response.body.items.item)
    const bondData = json.response.body.items.item;

    bondData.forEach((data, index)=>{
      console.log('ISIN코드',data.isinCd)
      console.log('종목명',data.itmsNm)
    })
  });