1) Promise - абстракція(img1)

  використання:

  - Асинхронний код поміщємо в Promise
  - На проміс встановлюємо обробники(onFullfilled, onRejected)
  - При запуску, асинхронний код переводить проміс в відповідний стан, спрацьовують обробники 
  (ex1.js)

2) Promise деталі

  Стандарт: чотири внутрішні поля
  - PromiseState – «pending», "resolved", "rejected".
  - PromiseResult – (res, err).
  - PromiseFulfillReactions
  - PromiseRejectReactions
  (img2)

  Then повертає новий Promise(img3)
  (ex2.js)

  *Стан проміса в залежності від того, що повернув executor(img4)

  Ланцюжки промісів

  Промісифікація функції(ex3)

  catch(ex3 continue)

3) bluebird
  промісифікація(ex4)