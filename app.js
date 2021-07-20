const MISION = 'We are an expert group in dermatology and skin care with a personal approach, where we generate creative, authentic and innovative solutions, achieving results that exced the expectations of each clients',
  VISION = `<strong>long text for vision</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eum magnam laudantium ducimus ea ipsam suscipit nam, porro odio distinctio.`,
  VALUES = `<strong>Long text for values</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eum magnam laudantium ducimus ea ipsam suscipit nam, porro odio distinctio.`

const [misionBtn, visionBtn, valuesBtn] = Array.from(document.querySelectorAll('.buttonsGroup .btn')),
  MISION_VISION_TEXT = document.getElementById('mision-vision--text')

const resetButtons = (btn1, btn2) => {
  btn1.classList.add('btn-normal')
  btn2.classList.add('btn-normal')
  
  btn1.classList.remove('btn-active')
  btn2.classList.remove('btn-active')
}

const changeText = (buttonClick, text, btn1, btn2) => {
  MISION_VISION_TEXT.innerHTML = text
  buttonClick.classList.remove('btn-normal')
  buttonClick.classList.add('btn-active')
  resetButtons(btn1, btn2)
}

if(misionBtn)
{
  misionBtn.addEventListener('click', () => changeText(misionBtn, MISION, visionBtn, valuesBtn))
}
if(visionBtn)
{
  visionBtn.addEventListener('click', () => changeText(visionBtn, VISION, misionBtn, valuesBtn))
}
if(valuesBtn)
{
  valuesBtn.addEventListener('click', () => changeText(valuesBtn, VALUES, misionBtn, visionBtn))
}

// LOADER

window.onload = () => {
  let container = document.getElementById("loaderContainer")
  let header = document.querySelector(".header")
  container.style.visibility = "hidden"
  container.style.opacity = "0"
  header.classList.add('d-block')
}