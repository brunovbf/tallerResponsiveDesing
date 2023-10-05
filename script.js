document.addEventListener("DOMContentLoaded", function() {
    const textContent = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ];
  
    function setTextContent() {
      document.getElementById('text-line-1').innerText = textContent[0];
      document.getElementById('text-line-2').innerText = textContent[1];
      document.getElementById('text-line-3').innerText = textContent[2];
    }
  
    setTextContent();
  
    setInterval(setTextContent, 2000);
  });
  