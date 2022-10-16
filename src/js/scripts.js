const smoothScroll = (id) => {
  const elem = document.getElementById(id);
  const navElem = document.getElementById('main-nav');
  const menuElem = document.getElementById('main-menu');
  const overlayElem = document.getElementById('overlay');

  const navElemHeight = navElem.offsetHeight;
  const offset = 54; // top padding of sections, so we scroll right to the start of the section
  
  const elemPos = elem.getBoundingClientRect().top;
  // when this runs, DOM is not yet updated and menu is still visible
  // so we need to subtract full nav height at this moment
  const offsetPos = elemPos + window.pageYOffset - navElemHeight - offset;
  
  menuElem.classList.remove('expanded');
  overlayElem.classList.add('hidden');

  window.scrollTo({
    top: offsetPos,
    behavior: 'smooth'
  });
};

const toggleNav = () => {
  document.getElementById('main-menu').classList.toggle('expanded');
  document.getElementById('overlay').classList.toggle('hidden');
}