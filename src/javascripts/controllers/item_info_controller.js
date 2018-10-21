import item_info from '../views/item_info.html';
import item_recom from '../views/recom_list.html';
import info_model from '../models/item_info_model';

let data = [];
const render = ()=>{
    getList();
}
const getList = async () =>{
    let item_data =await info_model.item_list();
    let item_list = item_data.data.product;
    data = item_list;
    renderList();
}
const renderList = ()=>{
    //渲染购物车列表
    let _template_car = Handlebars.compile(item_info);
    let _html_car = _template_car({_list : data});
    $('.C-group-wrap').html(_html_car);
    //渲染推荐列表
    let _template_recom = Handlebars.compile(item_recom);
    let _html_recom = _template_recom({_list : data});
    $('.P-recommend-list').html(_html_recom);

}
export default {render}