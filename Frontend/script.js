document.addEventListener('DOMContentLoaded', function () {
  const scanButton = document.getElementById('scanButton');
  const historyList = document.getElementById('historyList');
  const urlInput = document.getElementById('urlInput');
  const resultParagraph = document.getElementById('scanResult');
  const ctaButton = document.querySelector('.cta-button');

  // Smooth Scroll when Start Scanning button clicked
  ctaButton.addEventListener('click', () => {
    document.getElementById('scan').scrollIntoView({ behavior: 'smooth' });
  });

  scanButton.addEventListener('click', async () => {
    const urlToCheck = urlInput.value.trim();

    if (!urlToCheck) {
      resultParagraph.textContent = 'Please enter a URL.';
      resultParagraph.style.color = 'red';
      resultParagraph.style.backgroundColor = '#ffe5e5';
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/url/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: urlToCheck })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from server');
      }

      const data = await response.text(); // backend sends plain text

      resultParagraph.textContent = `Result: ${data}`;
      if (data === 'Legitimate') {
        resultParagraph.style.color = 'green';
        resultParagraph.style.backgroundColor = '#e2fbe2';
      } else {
        resultParagraph.style.color = 'red';
        resultParagraph.style.backgroundColor = '#ffe5e5';
      }

      // Add URL to History List
      const listItem = document.createElement('li');
      listItem.textContent = `${new Date().toLocaleString()} - ${urlToCheck} ➔ ${data}`;
      historyList.prepend(listItem); // new scan appears on top

    } catch (error) {
      resultParagraph.textContent = 'Error: ' + error.message;
      resultParagraph.style.color = 'red';
      resultParagraph.style.backgroundColor = '#ffe5e5';
    }
  });
});
