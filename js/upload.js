function uploadImages() {
  const fileInput1 = document.getElementById('fileInput1').files[0];
  const fileInput2 = document.getElementById('fileInput2').files[0];
  const fileInput3 = document.getElementById('fileInput3').files[0];
  const fileInput4 = document.getElementById('fileInput4').files[0]; // Retrieve the fourth file

  const reader1 = new FileReader();
  const reader2 = new FileReader();
  const reader3 = new FileReader();
  const reader4 = new FileReader(); // Create a new FileReader for the fourth file

  reader1.onload = function(event) {
    localStorage.setItem('imageUrl1', event.target.result);
  };
  reader2.onload = function(event) {
    localStorage.setItem('imageUrl2', event.target.result);
  };
  reader3.onload = function(event) {
    localStorage.setItem('imageUrl3', event.target.result);
  };
  reader4.onload = function(event) {
    localStorage.setItem('imageUrl4', event.target.result); // Store the URL of the fourth image
    window.location.href = 'checkout.html'; // Redirect to the display page after all images are uploaded
  };

  reader1.readAsDataURL(fileInput1);
  reader2.readAsDataURL(fileInput2);
  reader3.readAsDataURL(fileInput3);
  reader4.readAsDataURL(fileInput4); // Read the fourth file as data URL
}
