const item_list = () => {
    return $.ajax({
        url: '../static/mock/recommend.json',
        success: (res) => {
            return res;
        }
    })
}

export default {
    item_list
}