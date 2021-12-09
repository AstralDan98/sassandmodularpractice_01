export const clientData = () => {
   
   const submitButton = document.getElementById('sbmt');

   submitButton.addEventListener('click', () => {
      
      let reservationData = document.getElementById("reservation__data");
      let formData = new FormData (reservationData);

      for (let pair of formData.entries()) {
         console.log(pair[0]+ ', ' + pair[1]); 
      }
   });
}
