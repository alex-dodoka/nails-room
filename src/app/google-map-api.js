function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 50.0271781, lng: 36.341336},
        zoom: 16.7
    });

    let marker = new google.maps.Marker({
        map: map,
        position: {lat: 50.027244, lng: 36.342296},
        title: "Nails Room"
    });

    let infoPopUp = new google.maps.InfoWindow({
        content: `<h3>Салон маникюра и педикюра "Nails Room"</h3><p>Мастер Евгения</p><ul><li>Маникюр</li><li>Педикюр</li><li>Гель-лак</li><li>Наращивание ногтей(гель)</li><li>Аэрография</li></ul>
<a target="_blank" href="https://www.google.com/maps/place/Nail+Room/@50.0266188,36.3417601,18z/data=!4m5!3m4!1s0x4127a76f93411e1d:0xaaed790fb6b2adb9!8m2!3d50.027179!4d36.3422351?hl=ru-RU"><span>Показать на Google Картах</span></a>`
    });

    marker.addListener("click", function () {
        infoPopUp.open(map, marker);
    });
}