# systech-test-task
Тестовое задание для SysTech. Сделано с помощью шаблонизатора Handlebars, оптимизировано под ES5 через Babel.

Ссылка для проверки: http://landing-2.tw1.ru/

Запрос в таблицу:

SELECT docs.date, docTypes.name as type, rows.docId, products.image, products.name, products.price, rows.quantity, products.removed
FROM docs, docTypes, products, rows
WHERE docTypes.id = docs.typeid AND docs.id = rows.docId AND products.id = rows.productId AND docTypes.removed != 1
ORDER BY docs.date ASC
