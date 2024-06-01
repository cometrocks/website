document.addEventListener("DOMContentLoaded", function() {
  fetch('documents/cases.json')
    .then(response => response.json())
    .then(data => {
      const casesWrapper = document.querySelector('.cases__row');

      data.forEach((caseItem, index) => {
        const caseDiv = document.createElement('div');
        caseDiv.className = `collection-item w-dyn-item slick-slide ${index === 0 ? 'slick-current slick-active' : ''}`;
        caseDiv.setAttribute('role', 'listitem');
        caseDiv.setAttribute('tabindex', index === 0 ? '0' : '-1');
        caseDiv.style.width = "348px";
        
        caseDiv.innerHTML = `
          <div class="case">
            <div class="case__img-wrap">
              <img src="${caseItem.imgSrc}" alt="${caseItem.altText}" class="image-2">
            </div>
            <div class="case__cap">
              <h3 class="sec-subheading wid">${caseItem.title}</h3>
              <p class="case__desc">${caseItem.description}</p>
            </div>
          </div>
        `;

        casesWrapper.appendChild(caseDiv);
      });
    })
    .catch(error => console.error('Error loading cases:', error));
});
