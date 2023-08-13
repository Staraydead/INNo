//const API_KEY_YANDEX = '85eaff1b-ef9e-4c11-89bc-ca01d1ae43de'
//const API_URL_GEO_DATA = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY_YANDEX}&geocode=${place_name}&format=json`

//const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=pm10,pm2_5`

console.log('HELLO NIGA')

document.querySelector('button').onclick = myclick;

function myclick(){
    //console.log('Work');
    let a = document.querySelector('.City').value;
    console.log(a);
    document.querySelector('.out').innerHTML = a;

}

//zaebalo nemnogo
