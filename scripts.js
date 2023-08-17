
//const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=pm10,pm2_5`

console.log('HELLO NIGA')

document.querySelector('button').onclick = myclick;

function myclick(){
    //console.log('Work');
    let a = document.querySelector('.City').value;
    console.log(a);
    document.querySelector('.out').innerHTML = a;

}

const API_KEY_YANDEX = '99a52a8a-e301-4a65-a539-91d86dcb0109'
const API_URL_GEO_DATA = `https://geocode-maps.yandex.ru/1.x/?apikey=API_KEY_YANDEX&geocode=Москва,+Тверская+улица,+дом+7&format=json`



