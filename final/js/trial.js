const requestURL = 'https://trenton1231.github.io/final/data/rent.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();

    })

    .then(function (jsonObject) {
        const vehicles = jsonObject['vehicles'];
        console.log(jsonObject)

        vehicles.forEach(drive => {
            let card = document.createElement('tr');
            let name = document.createElement('td');
            let max = document.createElement('td');
            let tres = document.createElement('td');
            let day = document.createElement('td');
            let half = document.createElement('td');
            let full = document.createElement('td');


            name.textContent = `${drive.rentaltype}`;
            max.textContent = `${drive.capacity}`;
            tres.textContent = '$' + drive.reservation.tres;
            day.textContent = '$' + drive.reservation.day;
            half.textContent = '$' + drive.walkin.half;
            full.textContent = '$' + drive.walkin.full;


            card.appendChild(name);
            card.appendChild(max);
            card.appendChild(tres);
            card.appendChild(day);
            card.appendChild(half);
            card.appendChild(full);

            document.querySelector('.cards').appendChild(card);

        });
    });