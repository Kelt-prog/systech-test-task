"use strict";
var source = document.getElementById("main").innerHTML;
var template = Handlebars.compile(source);
// prettier-ignore
var data = '[{"date":"2017-10-16 12:07:07","name":"Творог 9% с курагой","id":564564867361367,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-14.jpg","price":121,"quantity":45,"removed":0},{"date":"2017-10-16 12:07:07","name":"Молочный Яблоко 100","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"quantity":44,"removed":0},{"date":"2017-10-16 12:07:07","name":"Молочный Традиция 100","id":564564867361367,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"quantity":62,"removed":0},{"date":"2017-10-16 12:07:07","name":"Виноград 0,3л","id":564564867361367,"image":null,"price":65,"quantity":87,"removed":0},{"date":"2017-10-16 12:07:07","name":"Русская картошка чедар 50","id":564564867361367,"image":"https://tut-prosto.ru/files/uploads/products/200806/86579.jpg","price":46.3,"quantity":86,"removed":0},{"date":"2017-10-16 12:07:07","name":"Молочный Груша 200","id":564564867361367,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"quantity":80,"removed":0},{"date":"2017-10-16 12:07:07","name":"Аленка карамель 100г Акционный товар Большая скидка","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"quantity":94,"removed":0},{"date":"2017-10-16 12:07:07","name":"Сыр 125г","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"quantity":83,"removed":0},{"date":"2017-10-16 15:09:08","name":"Яблоко-Виноград 0,5л","id":564564867361368,"image":"http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg","price":44,"quantity":20,"removed":0},{"date":"2017-10-16 15:09:08","name":"Молочный Груша 200","id":564564867361368,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"quantity":65,"removed":0},{"date":"2017-10-16 15:09:08","name":"Творог 9% с курагой","id":564564867361368,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-14.jpg","price":121,"quantity":41,"removed":0},{"date":"2017-10-16 15:09:08","name":"Молочный Изюм 100","id":564564867361368,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"quantity":72,"removed":0},{"date":"2017-10-16 15:09:08","name":"Виноград 0,3л","id":564564867361368,"image":null,"price":65,"quantity":39,"removed":0},{"date":"2017-10-16 18:11:09","name":"Молочный Традиция 100","id":564564867361369,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"quantity":60,"removed":0},{"date":"2017-10-16 18:11:09","name":"Аленка карамель 100г Акционный товар Большая скидка","id":564564867361369,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"quantity":99,"removed":0},{"date":"2017-10-16 18:11:09","name":"Русская картошка чедар 50","id":564564867361369,"image":"https://tut-prosto.ru/files/uploads/products/200806/86579.jpg","price":46.3,"quantity":51,"removed":0},{"date":"2017-10-16 18:11:09","name":"Русская картошка икра 50","id":564564867361369,"image":"https://www.utkonos.ru/images/photo/3117/3117496H.jpg","price":33.1,"quantity":15,"removed":0},{"date":"2017-11-01 12:09:03","name":"Молочный Груша 200","id":564564867361360,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"quantity":96,"removed":0},{"date":"2017-11-01 12:09:03","name":"Парус апельсин 1л","id":564564867361360,"image":null,"price":150,"quantity":89,"removed":1},{"date":"2017-11-01 12:09:03","name":"Молочный Яблоко 100","id":564564867361360,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"quantity":9,"removed":0},{"date":"2017-11-03 13:11:06","name":"Русская картошка чедар 50","id":564564867361361,"image":"https://tut-prosto.ru/files/uploads/products/200806/86579.jpg","price":46.3,"quantity":62,"removed":0},{"date":"2017-11-03 13:11:06","name":"Молочный Сказка 100","id":564564867361361,"image":"http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","price":39,"quantity":67,"removed":0},{"date":"2017-11-03 13:11:06","name":"Тоник 0,5л","id":564564867361361,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"quantity":51,"removed":0},{"date":"2017-11-03 13:11:06","name":"Молочный Изюм 100","id":564564867361361,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"quantity":4,"removed":0},{"date":"2017-11-03 13:11:06","name":"Творог 9% с курагой","id":564564867361361,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-14.jpg","price":121,"quantity":60,"removed":0},{"date":"2017-11-03 13:11:06","name":"Виноград 0,3л","id":564564867361361,"image":null,"price":65,"quantity":61,"removed":0},{"date":"2017-11-03 13:11:06","name":"Беседа. 50гр","id":564564867361361,"image":"https://images.ua.prom.st/2323233461_w640_h640_4-chaj-chernyj-beseda.jpg","price":36.5,"quantity":41,"removed":0},{"date":"2017-11-03 13:11:06","name":"Молочный Изюм 100","id":564564867361362,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"quantity":3,"removed":0},{"date":"2017-11-03 13:11:06","name":"Сыр 125г","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"quantity":96,"removed":0},{"date":"2017-11-03 13:11:06","name":"Тоник 0,5л","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"quantity":31,"removed":0},{"date":"2017-11-03 13:11:06","name":"Парус лимон 1л","id":564564867361362,"image":null,"price":150,"quantity":52,"removed":1},{"date":"2017-11-03 13:11:06","name":"Капля росы негаз 1.5л","id":564564867361362,"image":"http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg","price":16.9,"quantity":16,"removed":0},{"date":"2017-11-03 13:11:06","name":"Нежирный творог","id":564564867361362,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","price":52.41,"quantity":81,"removed":0},{"date":"2017-11-03 13:11:06","name":"Творог 9% с курагой","id":564564867361362,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-14.jpg","price":121,"quantity":23,"removed":0},{"date":"2017-11-03 13:11:06","name":"Горький коньяк 100","id":564564867361362,"image":"https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","price":336,"quantity":52,"removed":0},{"date":"2017-11-03 13:11:06","name":"Аленка карамель 100г Акционный товар Большая скидка","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"quantity":12,"removed":0},{"date":"2017-11-29 17:26:57","name":"Русская картошка чедар 50","id":564564867361365,"image":"https://tut-prosto.ru/files/uploads/products/200806/86579.jpg","price":46.3,"quantity":3,"removed":0},{"date":"2017-11-29 17:26:57","name":"Виноград 0,3л","id":564564867361365,"image":null,"price":65,"quantity":88,"removed":0},{"date":"2017-11-29 17:26:57","name":"Нежирный творог","id":564564867361365,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","price":52.41,"quantity":20,"removed":0},{"date":"2017-11-29 17:26:57","name":"Тоник 0,5л","id":564564867361365,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"quantity":64,"removed":0},{"date":"2017-11-29 17:26:57","name":"Молочный Сказка 100","id":564564867361365,"image":"http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","price":39,"quantity":54,"removed":0},{"date":"2017-11-29 17:26:57","name":"Парус апельсин 1л","id":564564867361365,"image":null,"price":150,"quantity":88,"removed":1},{"date":"2017-11-29 17:26:57","name":"Сметана и лук 25г","id":564564867361365,"image":"https://api.magonline.ru/thumbnail/370x370/00/341/341.png","price":30,"quantity":33,"removed":0},{"date":"2017-11-29 17:26:57","name":"Беседа. 50гр","id":564564867361365,"image":"https://images.ua.prom.st/2323233461_w640_h640_4-chaj-chernyj-beseda.jpg","price":36.5,"quantity":6,"removed":0},{"date":"2017-11-29 17:26:57","name":"Парус лимон 1л","id":564564867361365,"image":null,"price":150,"quantity":65,"removed":1},{"date":"2017-11-29 18:29:00","name":"Молочный Традиция 100","id":564564867361364,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"quantity":64,"removed":0},{"date":"2017-11-29 19:31:03","name":"Русская картошка чедар 50","id":564564867361363,"image":"https://tut-prosto.ru/files/uploads/products/200806/86579.jpg","price":46.3,"quantity":6,"removed":0},{"date":"2017-11-29 19:31:03","name":"Сметана и лук 25г","id":564564867361363,"image":"https://api.magonline.ru/thumbnail/370x370/00/341/341.png","price":30,"quantity":18,"removed":0},{"date":"2017-11-29 19:31:03","name":"Беседа. 50гр","id":564564867361363,"image":"https://images.ua.prom.st/2323233461_w640_h640_4-chaj-chernyj-beseda.jpg","price":36.5,"quantity":99,"removed":0},{"date":"2017-11-29 19:31:03","name":"Горький коньяк 100","id":564564867361363,"image":"https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","price":336,"quantity":94,"removed":0},{"date":"2017-11-29 19:31:03","name":"Сыр 125г","id":564564867361363,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"quantity":64,"removed":0},{"date":"2017-11-29 19:31:03","name":"Молочный Яблоко 100","id":564564867361363,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"quantity":52,"removed":0},{"date":"2017-11-29 19:31:03","name":"Парус апельсин 1л","id":564564867361363,"image":null,"price":150,"quantity":43,"removed":1}]';

var newObj = JSON.parse(data);
// обрезаем дату, поскольку часы-мин-сек не нужны в шаблоне и так удобнее сортировать
for (var i = 0; i < newObj.length; i++) {
  newObj[i].date = newObj[i].date.split(" ")[0];
}
//Преобразуем объект для вывода в шаблон
var result = newObj.reduce(function (r, a) {
  r[a.date] = r[a.date] || [];
  r[a.date].push(a);
  r[a.date] = r[a.date] || [];
  return r;
}, {});

// тут  полифил для Object.keys. Преобразуем объект для вывода в шаблон -- Продолжение
for (var _i = 0, _Object$keys = Object.keys(result); _i < _Object$keys.length; _i++) {
  var key = _Object$keys[_i];
  var l = result[key].reduce(function (r, a) {
    r[a.id] = r[a.id] || [];
    r[a.id].push(a);
    return r;
  }, {});
  result[key] = l;
}
// Тут начинаются Хелперы - функции для вызова в шаблоне handlebars

// хелпер для подсчета накладных
Handlebars.registerHelper("countIds", function (obj) {
  return Object.keys(obj).length;
});
// хелпер для правильного склонения слов
Handlebars.registerHelper("wordEndings", function (number) {
  var txt = ["штука", "штуки", "штук"];
  var cases = [2, 0, 1, 1, 1, 2];
  return txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
});
// хелпер преобразования даты
Handlebars.registerHelper("convertDate", function (date) {
  var dates = new Date(date).toLocaleString("ru", {
    day: "numeric",
    month: "long",
  });
  return dates;
});
// считем сумму всех накладных в день
Handlebars.registerHelper("countSum", function (obj) {
  var sum = 0;
  var newObj = Object.values(obj);
  newObj.forEach(function (element) {
    var arr = Object.values(element);
    arr.forEach(function (item) {
      var itemPrice = item.price * item.quantity;
      sum = sum + itemPrice; // console.log(item.price);
    });
  });
  return (Math.ceil(sum * 100) / 100).toLocaleString("ru-RU");
});
// подсчитываем общую стоимость для продукта
Handlebars.registerHelper("countIdSum", function (obj) {
  return (Math.ceil(obj.price * obj.quantity * 100) / 100).toLocaleString("ru-RU");
});
// подсчитываем  стоимость по Накладным для продукта
Handlebars.registerHelper("countIdProd", function (arr) {
  var sum = 0;
  arr.forEach(function (item) {
    var price = item.price * item.quantity;
    sum = sum + price;
  });
  return (Math.ceil(sum * 100) / 100).toLocaleString("ru-RU");
});
// хелпер-дебагер для отладки
Handlebars.registerHelper("debug", function (optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});

//Вывод в шаблон handlebars
var totalOutput = template(result);
document.querySelector(".inventory").innerHTML += totalOutput;
