
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    // const active = document.querySelector("#navbar li a");

    // if (active) {
    //     active.addEventListener("click", () => {
    //         active.classList.add('active');
    //     });
    // }

    if (bar) {
      bar.addEventListener('click', () => {
        nav.classList.add('active');
      });
    }

    if (close) {
      close.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    }







