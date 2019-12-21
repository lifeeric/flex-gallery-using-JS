// this is the project files
require('./index.html');
require('./main.scss');
require('./images/Poster1.jpg');
require('../node_modules/materialize-css/sass/materialize.scss');
require('../node_modules/material-icons/iconfont/material-icons.scss');



// Actual code is here //

// get the panel elements
let panel = Array.from(document.querySelectorAll('.panels__panel'));


const toggleActive = toggleMe => {
  let open = toggleMe.currentTarget.classList.toggle('open-flex');
  // console.log(open)
}

const flexMe = e => {
  console.log(e.propertyName.includes('flex'));

  if( e.propertyName.includes('flex') ) {
    console.log(e.currentTarget.classList.toggle('open'))
  }
} 

panel.forEach( item =>  item.addEventListener('click', toggleActive ));
panel.forEach( item =>  item.addEventListener('transitionend', flexMe ) )