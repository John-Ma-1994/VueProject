let obj = {};

// 获取所有商品数据
obj.getGoodsList = function () {
  return JSON.parse(window.localStorage.getItem('goodsList')||'{}');
}

// 保存商品
obj.saveGoods = function () {
  //本地存储
  window.localStorage.setItem('goodsList',JSON.stringify(goodsList));
}

obj.add = function (goods) {
  let goodsList = this.getGoodsList();
  if(goodsList[goods.id]){
    goodsList[goods.id] += goods.num;
  }else{
    goodsList[goods.id] = goods.num;
  }

  this.saveGoods(goodsList);
}

// 获取购物车数量总数
obj.getTotalCount = function () {
  let goodsList = this.getGoodsList();
  let values = Object.values(goodsList);
  let sum = 0;
  values.forEach(val=> sum += val);
  return sum;
}



export default obj;
