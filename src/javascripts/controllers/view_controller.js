import view_template from '../views/view.html';

const render = () => {
    $('.home-container main').html(view_template);
}

export default {
    render
}