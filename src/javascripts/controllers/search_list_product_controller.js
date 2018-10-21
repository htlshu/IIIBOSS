import home_model from '../models/home_model';
import search_list from '../views/search-list.html';
import search_list_product from '../views/search-list-product.html';
import search_list_tuijian_product from '../views/search-list-tuijian-product.html';
let  _KeyWord_data={};
let  _tuijian_data={};
const render = () => {
 
    $('.header').css("display","none")
    $('.footer').css("display","none")
    $('.tip').css("display","none")
    $('.hongbao').css("display","none")
   
    console.log("aaaa")
    $('.home-container').html(search_list)



    //得到关键字数据
    const getKeyWord = async () => {
        _KeyWord_data = await home_model.search()
        console.log(_KeyWord_data )
       // _KeyWord_data= _KeyWord_data.data
    
    
        renderKeyWord ()
    }
    const renderKeyWord  = () => { // 渲染job-content
        // 将html字符串处理成编译函数
        let _template = Handlebars.compile(search_list_product)
        // 将handlebar模板编译成html格式的字符串
        let _html = _template({_KeyWord_data : _KeyWord_data})
        //  渲染job视图
        $(".searchlist").html(_html)
        
    }
    getKeyWord()


  //得到推荐数据
  const gettuijian = async () => {
    _tuijian_data = await home_model.search()
    console.log( _tuijian_data )
   // _KeyWord_data= _KeyWord_data.data


    rendertuijian ()
}
const rendertuijian  = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(search_list_tuijian_product)
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _tuijian_data :  _tuijian_data})
    //  渲染job视图
    $(".tuijian").html(_html)
    
}
gettuijian ()
}
export default {
    render
}