$('.subscribtion').click(function(){
  
  if($(this).hasClass('active')) {
    
    $(this).removeClass('active');
    $('.form').removeClass('active');
    
    if($(this).hasClass('fivegram')) {
      $('.tengram').removeClass('hidden');
      $('.twentyfivegram').removeClass('hidden');
      $('.fiftygram').removeClass('hidden');
      $('.fivegram-form').removeClass('hidden');
      $('.fivegram-button').removeClass('active');
    }
    if($(this).hasClass('tengram')) {
      $('.fivegram').removeClass('hidden');
      $('.twentyfivegram').removeClass('hidden');
      $('.fiftygram').removeClass('hidden');
    }
    if($(this).hasClass('twentyfivegram')) {
      $('.fivegram').removeClass('hidden');
      $('.tengram').removeClass('hidden');
      $('.fiftygram').removeClass('hidden');
    }
    if($(this).hasClass('fiftygram')) {
        $('.fivegram').removeClass('hidden');
        $('.tengram').removeClass('hidden');
        $('.twentyfivegram').removeClass('hidden');
      }
    
  }
  else {
    $(this).addClass('active');
    
    if($(this).hasClass('fivegram')) {
      $('.tengram').addClass('hidden');
      $('.twentyfivegram').addClass('hidden');
      $('.fiftygram').addClass('hidden');
      $('.fivegram-form').addClass('hidden');
      $('.fivegram-button').addClass('active');
    }
    if($(this).hasClass('tengram')) {
      $('.fivegram').addClass('hidden');
      $('.twentyfivegram').addClass('hidden');
      $('.fiftygram').addClass('hidden');
    }
    if($(this).hasClass('twentyfivegram')) {
      $('.fivegram').addClass('hidden');
      $('.tengram').addClass('hidden');
      $('.fiftygram').addClass('hidden');
    }
    if($(this).hasClass('fiftygram')) {
        $('.fivegram').addClass('hidden');
        $('.tengram').addClass('hidden');
        $('.twentyfivegram').addClass('hidden');
      }
    
    $('.form').addClass('active');
  }
  
});

$('.payment-btn').click(function(){
  
  if( $(this).hasClass('active') ) {
    $(this).removeClass('active');
  }
  else {
    $('.payment-btn').removeClass('active');
    $(this).addClass('active');
  }
  
})


const fivegramDiv = document.querySelector('.subscribtion.fivegram');
const tengramDiv = document.querySelector('.subscribtion.tengram');
const fiftygramDiv = document.querySelector('.subscribtion.fiftygram');
const twentyfivegramDiv = document.querySelector('.subscribtion.twentyfivegram');
const auswahlElement = document.querySelector('#auswahl');

function setAuswahl(value) {
  auswahlElement.value = value;
}

fivegramDiv.addEventListener('click', () => {
  setAuswahl(5);
  console.log('Auswahl auf "Option 1" gesetzt');
});

tengramDiv.addEventListener('click', () => {
  setAuswahl(10);
  console.log('Auswahl auf "Option 2" gesetzt');
});

twentyfivegramDiv.addEventListener('click', () => {
  setAuswahl(25);
  console.log('Auswahl auf "Option 3" gesetzt');
});
fiftygramDiv.addEventListener('click', () => {
    setAuswahl(50);
    console.log('Auswahl auf "Option 4" gesetzt');
  });



const form = document.querySelector('#form');
const subscriptionElements = document.querySelectorAll('.subscribtion.fivegram, .subscribtion.tengram, .subscribtion.twentyfivegram, .subscribtion.fiftygram');

subscriptionElements.forEach(element => {
  element.addEventListener('click', () => {
    if (form.style.display === 'block') {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
  });
});


const birthdayInput = document.getElementById('birthday');

birthdayInput.addEventListener('change', () => {
  const today = new Date();
  const birthDate = new Date(birthdayInput.value);
  const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25));

  if (age < 21) {
    alert('Du bist zu jung!');
  }
});