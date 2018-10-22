
// 用户资源导航(余额，红包，商品券，积分)数据
const user_msg =()=>{
    return $.ajax({
        url:'https://as-vip.missfresh.cn/v1/customer/userinfo?device_id=d4c7ee00-cc81-11e8-9779-79c5f2612fc0&env=web&platform=web&uuid=d4c7ee00-cc81-11e8-9779-79c5f2612fc0&version=.0.2&screen_height=375&screen_width=667',
        success: (data) => {
            return data
        }
    })
}

module.exports ={
    user_msg
}