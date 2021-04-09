const MISION = 'We are an expert group in architectural design and interior design with a residential approach, where we generate creative, authentic and innovative solutions, achieving results that exced the expectations of each clients',
  VISION = `<strong>VISION</strong>We are an expert group in architectural design and interior design with a residential approach, where we generate creative, authentic and innovative solutions, achieving results that exced the expectations of each clients`,
  VALUES = `<strong>VALUES</strong>We are an expert group in architectural design and interior design with a residential approach, where we generate creative, authentic and innovative solutions, achieving results that exced the expectations of each clients`

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

misionBtn.addEventListener('click', () => changeText(misionBtn, MISION, visionBtn, valuesBtn))

visionBtn.addEventListener('click', () => changeText(visionBtn, VISION, misionBtn, valuesBtn))

valuesBtn.addEventListener('click', () => changeText(valuesBtn, VALUES, misionBtn, visionBtn))
