function initMap() {
            var tokoZeeone = {lat: -6.200000, lng: 106.816666}; // Replace with the actual coordinates
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: tokoZeeone
            });
            var marker = new google.maps.Marker({
                position: tokoZeeone,
                map: map,
                title: 'Toko Zeeone'
            });

            var infoWindow = new google.maps.InfoWindow({
                content: '<p class="text-black font-semibold">Toko Zeeone</p><a class="text-blue-600 text-sm" href="#">Lihat peta lebih besar</a>'
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
