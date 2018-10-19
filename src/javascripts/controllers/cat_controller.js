import cat_template from '../views/cat.html';

const render = () => {
    $('.home-container main').html(cat_template);
}

export default {
    render
}