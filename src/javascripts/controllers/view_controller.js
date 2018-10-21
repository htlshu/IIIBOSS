import view_template from '../views/view.html';

const render = () => {
    $('.home-container main').html(view_template);
    $('.header').css("display","none")
}

export default {
    render
}