

import search_template from '../views/search.html';

const render = () => {
    $('.home-container main').html(search_template);
    $('.header').css("display","none")
}

export default {
    render
}