console.log('HELLO NIGA')

document.querySelector('button').onclick = myclick;

function myclick(){
  //console.log('Work');
  let a = document.querySelector('.City').value;
  console.log(a);
  document.querySelector('.out1').innerHTML = 'Выбранный город: '+a;

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
    
      const coordinates = cord.split(' ');
      var lng = parseFloat(coordinates[0]);
      var lat = parseFloat(coordinates[1]);
      console.log(typeof(lat));
      document.querySelector('.out3').innerHTML = 'Долгота: '+ lng;
      document.querySelector('.out4').innerHTML = 'Широта: '+ lat;

      const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&hourly=pm10,pm2_5`;
      console.log(API_OPEN_METEO);
      
      async function getdirt() {
        let dirt = 0
        
        let response = await fetch(API_OPEN_METEO);
          let data = await response.json();
          dirt = data.hourly;
          dirthead = ['Дата', 'pm10 '+data.hourly_units.pm10, 'pm2_5 '+data.hourly_units.pm2_5];
          console.log(dirthead);
          console.log(dirt);
          let arr = [dirt.time, dirt.pm10, dirt.pm2_5];
          let time = dirt.time;
          let pm10 = dirt.pm10;
          let pm2_5 = dirt.pm2_5;
          console.log(arr);

          let arrV = [];
          time.forEach((item, index) => {
            arrV [index]= [time[index],pm10[index],pm2_5[index]];
            // item - элемент массива на текущей итерации
            // index - порядковый номер элемента в массиве
            //console.log(arrV);
          })

          console.log(arrV[0]);

          arrV.unshift(dirthead);

          console.log(arrV[0]);

          let table = document.querySelector('.tbody');
          table.innerHTML = '';
          for (let subArr of arrV) {
            let tr = document.createElement('tr');
            
            for (let elem of subArr) {
              let td = document.createElement('td');
              td.textContent = elem;
              tr.appendChild(td);
            }
            
            table.appendChild(tr);
          }
                  
        }
        getdirt();

      }
    getcord();

}
