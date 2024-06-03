document.querySelector('.select').addEventListener('click', function() {

    document.querySelector('.menu').classList.toggle('show');
  });
  
  
  document.querySelectorAll('.menu li').forEach(function(item) {
    item.addEventListener('click', function() {
  
      document.querySelector('.selected').textContent = this.textContent;
  
      document.querySelector('.menu').classList.remove('show');
    });
  });
  window.addEventListener('click', function(e) {
    if (!document.querySelector('.dropdown').contains(e.target)) {
      document.querySelector('.menu').classList.remove('show');
    }
  });
  