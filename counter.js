const $ = (id) => document.querySelector(id)
let valueCount = 1

$('.btnMinus').addEventListener('click',
  () => {
    valueCount = valueCount - 1
    valueCount < 1 ? valueCount = 1 : $('#count').value = valueCount
  })

$('.btnPlus').addEventListener('click',
  () => {
    valueCount = valueCount + 1
    valueCount > 100 ? valueCount = 100 : $('#count').value = valueCount
  })
