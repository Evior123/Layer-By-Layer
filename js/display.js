document.addEventListener('DOMContentLoaded', function() {
    const imageUrl1 = localStorage.getItem('imageUrl1');
    const imageUrl2 = localStorage.getItem('imageUrl2');
    const imageUrl3 = localStorage.getItem('imageUrl3');
    const imageUrl4 = localStorage.getItem('imageUrl4');
  
    if (imageUrl1) {
      document.getElementById('imageUrlInput1').value = shortenUrl(imageUrl1);
    }
    if (imageUrl2) {
      document.getElementById('imageUrlInput2').value = shortenUrl(imageUrl2);
    }
    if (imageUrl3) {
      document.getElementById('imageUrlInput3').value = shortenUrl(imageUrl3);
    }
    if (imageUrl4) {
      document.getElementById('imageUrlInput4').value = shortenUrl(imageUrl4);
    }
  });
  
  function shortenUrl(url) {
    const maxLength = 10000000000; // Maximum length of the shortened URL
    if (url.length <= maxLength) {
      return url;
    }
    return url.substring(0, maxLength - 3) + '...'; // Shorten URL and add ellipsis
  }
  