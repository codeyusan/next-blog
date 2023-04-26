> Promise三个状态： `pending`, `fulfilled`, `rejected`

> Promise的then方法：`promise.then(onFulfilled, onRejected)`

- `onFulfilled `和 `onRejected`是可选的，当参数不为函数的时候，忽略
- `onFulfilled `为函数时
  -  调用在`promise`状态改变为`fulfilled`之后，`promise`的`value`作为第一个参数；
- `onRejected`为函数时
  -  调用在`promise`状态改变为`rejected`之后，`promise`的`reason`作为第一个参数；

- `then`方法方法可以在一个`promise`上调用多次
- `then`方法必须返回一个`promise`: `promise2 = promise1.then(onFulfilled, onRejected);`
  -  如果`onFulfilled`或者`onRejected`返回一个值 `x` ,执行`promise`解决程序`[[Resolve]](promise2, x)`
  - 如果`onFulfilled`或者`onRejected`抛出错误` e` ,`promise2`必须将`e`作为失败之后的回调的原因
  - 如果`onFulfilled`不是函数，`promise1`的状态为成功，`promise2`必须要以`promise1`的值作为成功的回调的值
  - 如果`onRejected`不是函数，`promise1`的状态为失败，`promise2`必须要以`promise1`的原因作为失败的回调的值
```
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const promiseResolve = (promise, x, resolve, reject) => {
  if (promise === x) {
    reject(new TypeError('TypeError'))
  } else if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called = false
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          promiseResolve(promise, y, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.successCallback = []
    this.errorCallback = []
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.successCallback.forEach(fn => fn(value))
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.errorCallback.forEach(fn => fn(reason))
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
    const promise2 = new MyPromise((resolve, reject) => {
      const thenCallback = (callback, value) => {
        setTimeout(() => {
          try {
            let x = callback(value)
            promiseResolve(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === FULFILLED) {
        thenCallback(onFulfilled, this.value)
      }
      if (this.status === REJECTED) {
        thenCallback(onRejected, this.reason)
      }
      if (this.status === PENDING) {
        this.successCallback.push(value => thenCallback(onFulfilled, value))
        this.errorCallback.push(reason => thenCallback(onRejected, reason))
      }
    })
    return promise2
  }
}
```
参考大佬：https://github.com/zhangpaopao0609