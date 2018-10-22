import home_model from '../models/home_model';
import search_list from '../views/search-list.html';
import search_list_product from '../views/search-list-product.html';
import search_list_tuijian_product from '../views/search-list-tuijian-product.html';
import getkeyproduct from '../views/getkeyproduct.html';
import home_controller from './home_controller';
let  _KeyWord_data={};
let  _tuijian_data={};
let  _keyproductWord_data={}
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

        //点击火锅显示内容
        $(".hotkey_item_continer").on("tap",".hotkey_item",function(e){
          if($(e.target).index()==1){
            $(".hotkey").css("display","none")
            const getkeyproductWord = async () => {
                _keyproductWord_data = await home_model.keyproduct()
                console.log( _keyproductWord_data)
                    
               // _KeyWord_data= _KeyWord_data.data
            
            
               renderkeyproductWord ()
            }
            const renderkeyproductWord = () => { // 渲染job-content
                // 将html字符串处理成编译函数
               
                let _template = Handlebars.compile(getkeyproduct)
                // 将handlebar模板编译成html格式的字符串
                let _html = _template({ _keyproductWord_data :  _keyproductWord_data})
                //  渲染job视图

              
                $(".tuijian").html(_html)
                console.log(  99999999999999)
                
            }
            
          getkeyproductWord()



          }
        else  {
               $(".hotkey").html("");
              
               var str= $("<img class='tu'  src='//static-as.missfresh.cn/frontend/mfs3/web/static/img/noResult.79da18e.png'>")
                var str2= $("<span class='wu'></span>").text("无相关商品，请尝试其他商品")
            
               $(".hotkey").append(str)
               $(".hotkey").append(str2)
           }
        })
        

        //点击左箭头回退到首页
        // $(".search_input").on("tap",".jiantou",function({
        //     home_controller.render()
        // }))
        $('.search_input a').on("tap",function(){
            home_controller.render()
        })
        
        
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


//





}
export default {
    render
}