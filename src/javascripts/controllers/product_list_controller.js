import product_list from '../views/product_list.html';
import item from './item_info_controller'
const render = () =>{
    item.render();
    //选择购物车中下单商品
    let warp = $('.C-group-wrap');
    warp.html(product_list);
    //选择所有
    warp.on('touchstart','.C-group-header .C-checkbox',function(){
        $('.C-checkbox').attr('class','C-checkbox selected')
    })
    //选择单个
    warp.on('touchstart','.C-checkbox',function(e){
        $(e.target).attr('class','C-checkbox selected')
    })
}
export default {render};