// document.addEventListener('DOMContentLoaded', function () {

//   //asymc/await seguimos usando promesas. Tomaremos distancia del .then(), 'tomamamos distancia de esa forma tradiocional de resolver promesas'

//   const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/reviews'

//   const reviewsList = document.getElementById('reviews-list')

//   async function reviews(url) {

//     try {

//       const res = await fetch(url)
//       const data = await res.json()
//       // console.log(data);
//       data.forEach(element => {
//         console.log(element);
//         reviewsList.innerHTML += `
//         <li class='review-card'>
//           <img src="${element.image}" alt="${element.fullName}" />
//           <div class="review-details">
//             <h3>${element.fullName}</h3>
//             <p data-translate-en="${element.profession}" data-translate-es="${element.profesion}" class="review-profession">${element.profesion}</p>
//             <p data-translate-en="${element.message}" data-translate-es="${element.mensaje}" class="review-message">"${element.mensaje}"</p>
//             <div class="review-rating">${"★".repeat(element.rating)}</div>
//           </div>
//       </li>
        
//         `
//       });
//   reviews(URL)
// })

// reviws
// Selecciona todas las reseñas
const reviewCards = document.querySelectorAll('.review-card');

// Muestra solo las primeras tres reseñas
reviewCards.forEach((card, index) => {
    if (index < 3) {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
});

