function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
  
      const offset = element.offsetHeight - element.clientHeight;
      element.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });
      element.removeAttribute('data-autoresize');
    });
  }

  addAutoResize();