const toggle = 'is-sticky';
const handleScroll = (modal: HTMLElement | null) => {
  if (modal) {
    const currentScroll = modal.scrollTop;
    if (currentScroll > 0) {
      modal.classList.add(toggle);
    } else {
      modal.classList.remove(toggle);
    }
  }
};

export default handleScroll;
