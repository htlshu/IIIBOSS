import login_templete from '../views/login.html'
import home_templete from './home_controller'

const render = () => {
    $('.header').css("display","none")
    $('.tip').css("display","none")
    $('main').html(login_templete)

//手机号
    function isPoneAvailable($poneInput ){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($poneInput.val())) {
            $(".span1").css("display","block")
        } else {
            $(".span1").css("display","none")
        }
    }
//密码
    function isPoneAvailabll($poneInput ){
        var myreg= /^[a-zA-Z0-9]{6,8}$/;	
        if (!myreg.test($poneInput.val())) {
            $(".span2").css("display","block")
        } else {
            $(".span2").css("display","none")
        }
    }


   //手机
   $(".num").on('focusout', function () {
        console.log($(this).val());
        isPoneAvailable($(".num") )
       })

//密码
       $(".password").on('focusout', function () {
        console.log($(this).val());
        isPoneAvailabll($(".password") )
       })

//点击登录
      $(".form-submit").on("tap",".weui-btn",function(){
      
        if ( $(".form-protocol-checkbox").is(':checked')){//z只有勾选相关协议才能跳转到首页，否则禁止跳转并弹出框并提示用户勾选
          
            home_templete.render();
            location.hash="#/job";
             
            }else{
             
            alert("请同意相关协议！")
             
            }
            

      })




}
export default {
    render
}