const handleScrollView = () => {
  const element = document.getElementById('footer_right_block')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default handleScrollView
