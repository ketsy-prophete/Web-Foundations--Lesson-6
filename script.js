function generateInfo() {
    let baseURL = "https://api.sunrise-sunset.org/json?";
    let myLatitude = document.getElementById('latValue').value;
    let myLongitude = document.getElementById('lngValue').value;

    let myURL = baseURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today";

    $.ajax(myURL, {
        success: function (APIResponse) {

            var sunriseInfo = $(`<p> Sunrise Time: ${APIResponse.results.sunrise} </p>`);
            var sunsetInfo = $(`<p> Sunset Time: ${APIResponse.results.sunset} <p>`)
            $('#bottomDiv').append(sunriseInfo).append(sunsetInfo);
        }
    })
}