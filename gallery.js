const gallery = document.getElementById('gallery')
const galleryItems = document.querySelectorAll(".gallery-item")
const columns = getComputedStyle(gallery).getPropertyValue('--columns').trim()


const masonryLayout = (container, items, columns) => {
  container.classList.add('masonry-layout', `columns-${columns}`)
  let columnsElemnt = []

  for(let i = 1; i <= columns; i++)
  {
    let column = document.createElement('div')
    column.classList.add('masonry-column', `column-${i}`)
    container.appendChild(column)
    columnsElemnt.push(column)
  }

  for(let row = 0; row < Math.ceil(items.length / columns); row++)
  {
    for(let col = 0; col < columns; col++)
    {
      // debugger
      let item = items[row * columns + col]
      if(item)
      {
        columnsElemnt[col].insertAdjacentElement("beforeend", item)
      }
    }
  }
}

masonryLayout(gallery, galleryItems, columns)

