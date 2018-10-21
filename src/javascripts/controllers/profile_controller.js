

import profile_template from '../views/profile.html';

const render = () => {
    $('.home-container main').html(profile_template);
    $('.header').css("display","none")
}

export default {
    render
}