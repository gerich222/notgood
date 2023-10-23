function addelement(x){
    let elementsport = document.getElementById(`sportdiv`);
    let elementbook = document.getElementById(`bookdiv`);
    let elementmusic = document.getElementById(`musicdiv`);
    switch(x) {
        case sportdiv:
                elementsport.classList.add("animated-show");
                sportdiv.classList.remove("animated-hide");
                elementsport.removeAttribute("hidden");
                    bookdiv.classList.add("animated-hide");
                    bookdiv.classList.remove("animate.show")
                    elementbook.setAttribute("hidden", "hidden");
                    musicdiv.classList.remove("animated-hide");
                    musicdiv.classList.remove("animate.show")
                    elementmusic.setAttribute("hidden", "hidden");
                
            break;
        case bookdiv:
                bookdiv.classList.add("animated-show");
                bookdiv.classList.remove("animated-hide");
                elementbook.removeAttribute("hidden");
                    sportdiv.classList.add("animated-hide");
                    sportdiv.classList.remove("animate.show")
                    elementsport.setAttribute("hidden", "hidden");
                    musicdiv.classList.add("animated-hide");
                    musicdiv.classList.remove("animate.show")
                    elementmusic.setAttribute("hidden", "hidden");

            break;
        case musicdiv:
                musicdiv.classList.add("animated-show");
                musicdiv.classList.remove("animated-hide");
                elementmusic.removeAttribute("hidden");
                    sportdiv.classList.add("animated-hide");
                    sportdiv.classList.remove("animate.show")
                    elementsport.setAttribute("hidden", "hidden");
                    bookdiv.classList.add("animated-hide");
                    bookdiv.classList.remove("animate-show")
                    elementbook.setAttribute("hidden", "hidden");
            break;
    }
}
const countryList = document.querySelector('.form-list.country');

fetch('https://restcountries.com/v3.1/all').then(res => {
  return res.json();
}).then(data => {
    data.sort()
  let output = '';
  data.forEach(country => {
    output += `<option class="form-item" data-value="${country.name.common}">${country.name.common}</option>`;
    countryList.innerHTML = output;
  });
}).catch(err => {
  console.log(err);
});

const formElement = document.getElementById('form');
formElement.addEventListener('submit', (e) => {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const email1 = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email1)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "wrong email adress";
    }
  e.preventDefault();
  const formData = new FormData(formElement);

  const name = formData.get('name');
  const country1 = formData.get('country')
  /// Interests
  let inter = document.getElementsByName('inter');
    let option_value_inter;
    for(let i = 0; i < inter.length; inter.length){
        if(inter[i].checked){
            option_value_inter = inter[i].value;
            i++
            break;
        }
        
    }
    const inter2 = option_value_inter
  ///
  /// Gender
  let gend = document.getElementsByName('gend');
  let option_value_gend;
  for(let i = 0; i < gend.length; gend.length){
      if(gend[i].checked){
          option_value_gend = gend[i].value;
          i++
          break;
      }
  }
  ///
  const gender = option_value_gend
  
  const inter1 = formData.get(`${inter2}`)

  console.log(`Name : ${name}\nEmail : ${email1}\nGender : ${gender}\nCountry : ${country1}\nInterests : ${inter2}, ${inter1}`)
});
