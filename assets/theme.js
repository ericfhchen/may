// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Track mouse position for glow effects
  const navLinks = document.querySelectorAll('.site-nav__link, .cart-toggle');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      const rect = link.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      link.style.setProperty('--x', `${centerX}px`);
      link.style.setProperty('--y', `${centerY}px`);
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      mobileMenuToggle.setAttribute('aria-expanded', 
        mobileMenuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }

  // Product image gallery
  const productThumbnails = document.querySelectorAll('.product-thumbnail');
  const productMainImage = document.querySelector('.product-main-image');
  
  if (productThumbnails.length && productMainImage) {
    productThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const newSrc = this.getAttribute('data-full-image');
        const newAlt = this.querySelector('img').getAttribute('alt');
        
        productMainImage.setAttribute('src', newSrc);
        productMainImage.setAttribute('alt', newAlt);
        
        // Update active state
        productThumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Quantity selector
  const quantitySelectors = document.querySelectorAll('.quantity-selector');
  
  if (quantitySelectors.length) {
    quantitySelectors.forEach(selector => {
      const decreaseBtn = selector.querySelector('.quantity-decrease');
      const increaseBtn = selector.querySelector('.quantity-increase');
      const input = selector.querySelector('input');
      
      if (decreaseBtn && increaseBtn && input) {
        decreaseBtn.addEventListener('click', function() {
          const currentValue = parseInt(input.value, 10);
          if (currentValue > 1) {
            input.value = currentValue - 1;
            // Trigger change event for cart updates
            input.dispatchEvent(new Event('change', { bubbles: true }));
          }
        });
        
        increaseBtn.addEventListener('click', function() {
          const currentValue = parseInt(input.value, 10);
          input.value = currentValue + 1;
          // Trigger change event for cart updates
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }
    });
  }

  // Initialize cart overlay
  document.addEventListener('DOMContentLoaded', () => {
    new CartOverlay();
  });
}); 