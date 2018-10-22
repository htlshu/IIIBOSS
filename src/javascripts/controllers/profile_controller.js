

import profile_template from '../views/profile.html';
import user_items_controller from './mine_user_items_controller'

const mine_template = require('../views/profile.html')

const render = () => {
    $('.home-container main').html(profile_template);
    $('.header').css("display","none")
    $('.tip').css("display","none")
    document.querySelector('main').innerHTML = mine_template  
    user_items_controller.render()
    

}
export default {
    render
}



