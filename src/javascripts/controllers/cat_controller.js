import cat_template from '../../shop_car.html';

const render = () => {
    $('.home-container main').html(cat_template);
    $('.header').css("display","none")
}

export default {
    render
}