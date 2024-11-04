document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.share-icon').forEach((icon) => {
      icon.addEventListener('click', (event) => {
        event.stopPropagation();
        const shareOptions = icon.closest('.button-container').querySelector('.share-options');
        console.log(shareOptions); // This should log the correct .share-options element
        
        // Toggle the share-options visibility
        if (shareOptions) {
          shareOptions.classList.toggle('active');
        }
      });
    });
    
    // Hide share-options if clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.share-options').forEach((options) => {
        options.classList.remove('active');
      });
    });
  });
  