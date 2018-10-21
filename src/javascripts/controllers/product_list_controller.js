import product_list from '../views/product_list.html';
import item from './item_info_controller'
const render = () =>{
    item.render();
    //选择购物车中下单商品
    let warp = $('.C-group-wrap');
    warp.append(product_list);
    //选择所有
    warp.on('touchstart','.C-group-header div.C-checkbox',function(){
        if($(this).attr('class')==='C-checkbox selected'){
            $('.C-checkbox').attr('class','C-checkbox')
        }else{
            $('.C-checkbox').attr('class','C-checkbox selected')
        }
    })
    //选择单个
    warp.on('touchstart','.C-group-item-list div.C-checkbox',function(e){
        if($(this).attr('class')==='C-checkbox selected'){
            $(this).attr('class','C-checkbox')
            $('.C-group-header div.C-checkbox').attr('class','C-checkbox')
        }else{
            $(this).attr('class','C-checkbox selected')
        }
    })
    //商品数量
    warp.on('touchstart','.sub',function(){
        console.log(this);
        
        let num =parseInt($(this).siblings('.P-item-controller-num').html());
        --num;
        if(num==0){
            $(this).parents('.P-item-wrap').html('');
        }
        $(this).siblings('.P-item-controller-num').html(num);
    })
    warp.on('touchstart','.add',function(){
        let num =parseInt($(this).siblings('.P-item-controller-num').html());
        $(this).siblings('.P-item-controller-num').html(++num);
    })
}
export default {render};