
//const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=pm10,pm2_5`

console.log('HELLO NIGA')

document.querySelector('button').onclick = myclick;

function myclick(){
    //console.log('Work');
    let a = document.querySelector('.City').value;
    console.log(a);
    document.querySelector('.out1').innerHTML = 'Your City: '+a;


let place_name = a
console.log(place_name)

const API_KEY_YANDEX = '99a52a8a-e301-4a65-a539-91d86dcb0109'
const API_URL_GEO_DATA = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY_YANDEX}&geocode=${place_name}&format=json`

console.log(API_URL_GEO_DATA)

fetch(API_URL_GEO_DATA)
.then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
    //let b = get(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
    document.querySelector('.out2').innerHTML = 'Координаты: '+data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  });

  async function getcord() {
    let cord = 0
    let response = await fetch(API_URL_GEO_DATA);
      let data = await response.json();
      cord = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
      
      console.log(cord);
   }
   getcord();

}