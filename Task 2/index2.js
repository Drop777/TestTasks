const openButton = document.querySelector('.open-btn');
openButton.addEventListener('click',  () => createModal())

function createModal() {
    const modalWindow = document.createElement('div');
    const modalHeader = document.createElement('div');
    const title = document.createElement('div');
    const closeBtn = document.createElement('button');
    const modalBody = document.createElement('div');
    const overlay = document.createElement('div');
  
    modalWindow.className = 'modal';
    modalHeader.className = 'modal-header';
    title.className = 'title';
    closeBtn.className = 'close-btn';
    modalBody.className = 'modal-body';
    overlay.id = 'overlay';
  
    title.innerText = 'Hi from modal';
    closeBtn.innerHTML = '&times;';
    modalBody.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur, voluptas, hic consectetur unde doloribus omnis voluptatem cumque cum quae adipisci id. Qui, nulla perspiciatis ducimus libero quam tenetur ipsam';
  
    modalHeader.append(title, closeBtn);
    modalWindow.append(modalHeader, modalBody);
    document.body.append(modalWindow, overlay);
  
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', () => closeModal());

    function addActiveClass() {
      overlay.className = 'active';
    }

    function closeModal() {
      document.body.removeChild(modalWindow);
      document.body.removeChild(overlay);
    }
  
    addActiveClass();
}




