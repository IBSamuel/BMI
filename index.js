const nope=()=>{
  bmi= Number(num.innerHTML/100)**2
  squared = Number(numm.innerHTML)
  numericalValue.innerHTML = (squared/bmi).toFixed(2)
  reshow.innerHTML=numericalValue.innerHTML
  let newNumber = numericalValue.innerHTML
  if(numericalValue.innerHTML <=18.5){
    advise.innerHTML = `Underweight <small>"Consider speaking with a healthcare professional to develop a healthy eating and exercise plan to help you gain weight in a safe and sustainable way."</small>`
  }
  //   /BMI between 18.5 and 24.9: Normal weight/
  else if(numericalValue.innerHTML >18.5 && numericalValue.innerHTML <=24.9){
    advise.innerHTML = `Normal <small>Maintain a balanced diet and regular exercise routine to support your overall health and wellbeing</small>`
    ima.src="Man.png"
  }
  // /BMI between 25 and 29.9: Overweight/
  else if(numericalValue.innerHTML >=25 && numericalValue.innerHTML <=29.9){
    advise.innerHTML = `You are Overweight, <small>Make small, sustainable changes to your diet and exercise habits to achieve a healthy weight over time</small>`
    ima.src="Woman.png"
  }
  // /BMI of 30 or higher: Obese/ 
  else if(numericalValue.innerHTML >30){
    advise.innerHTML = `Obese, <small>Seek guidance from a healthcare professional to develop a personalized plan for managing your weight and improving your overall health</small>`
    ima.src="obese.png"

  }
 
// }
}
const calPounds=()=>{
  let pond = pounds.value/2.205
  let result = poundsresult.innerHTML = pond.toFixed(7)
}
const calMeter=()=>{
  met = meter.value*100
  resultCentimeter.innerHTML = met
}
const female=()=>{
  let timerInterval
  Swal.fire({
    title: 'You are welcome',
    html: 'It nice to be a Female.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}
const male=()=>{
  let timerInterval
Swal.fire({
title: 'You are welcome',
html: 'It nice to be a Male <b></b>.',
timer: 2000,
timerProgressBar: true,
didOpen: () => {
  Swal.showLoading()
  const b = Swal.getHtmlContainer().querySelector('b')
  timerInterval = setInterval(() => {
    b.textContent = Swal.getTimerLeft()
  }, 100)
},
willClose: () => {
  clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === Swal.DismissReason.timer) {
  console.log('I was closed by the timer')
}
})
}
const other=()=>{
  let timerInterval
Swal.fire({
title: 'You are welcome',
html: 'It nice to have you <b></b>.',
timer: 2000,
timerProgressBar: true,
didOpen: () => {
  Swal.showLoading()
  const b = Swal.getHtmlContainer().querySelector('b')
  timerInterval = setInterval(() => {
    b.textContent = Swal.getTimerLeft()
  }, 100)
},
willClose: () => {
  clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === Swal.DismissReason.timer) {
  console.log('I was closed by the timer')
}
})
}