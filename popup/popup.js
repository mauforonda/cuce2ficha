const init = function initScript() {
    write()
};

const write = function writeQuery() {
    const input = document.getElementsByTagName('INPUT')[0];
    input.style = 'border: 1px solid #d2d1d1; color: #000; background: rgb(255, 255, 255); padding: 5px 10px; margin: 30px 7%; line-height: 25px; border-radius: 3px; width: 80%;';
    input.placeholder = 'Ingresa un CUCE: 22-0006-00-1254579-1-1'
    input.focus();
    input.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        input.blur();
        input.style = 'border: none; color: #fbfbfb; background: #fbfbfb;';
        cuce = input.value.trim()
        pattern = /[0-9]{2}-[0-9]{4}-[0-9]{2}-[0-9]*-[0-9]-[0-9]/g
        if (pattern.test(cuce)) {
            browser.tabs.create({url: `https://www.sicoes.gob.bo/portal/contrataciones/ficha/fichaProceso.php?cp=${cuce}`})
        }
        window.close()
      }
    });
  };

init();