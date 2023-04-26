**1. 基元类型： string, number, boolean**
```
let typeString: string = 'hello world'     //    :string 为变量的类型注释
let typeNumber: number = 100
let typeBoolean: boolean = true 

//null, undefined
let a: null = null
let b: undefined = undefined

type TypeNumber = number | null 
function getNumber(num: TypeNumber): string {
  //  ! 非空断言操作符，消除编译null 和 undefined 报错，需要确保变量类型不是null和undefined
  return num!.toFixed()
}

```

**2. 数组：type[], `Array<type>`**
```
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
```
**3. 函数**
```
function greet(name: string, age: number): string {
  return name + age
}
```

**4.联合类型**
```
let union: string | number = 100
union = '100'

let union2 = string[] | number = 100
union2 = ['hello', 'world']
```

**5.类型别名**
```
//类型别名首字母大写
type Alias = {  
  name: string,
  age: number
}

type AliasUnion = string | number

type AilasBase = string

使用：
function useAlias(userInfo: Alias): AilasBase {
  return userInfo.name + userInfo.age
}
useAlias({
  name: '小明',
  age: 18
})
```

**6.接口**
```
intertface Point {
  x: number,
  y: number
}

//使用
function getNumber(numberObj: Point): number {
  return numberObj.x + numberObj.y
}
getNumber({
  x: 100,
  Y: 100
})
```

```
intertface Point {
  x: number,
  y: number
}

type Animal = {
  name: string
}

//扩展接口（与type的不同之处）
1.不同接口
interface PointChild extends Point {
  z: number
}

type Bear = Animal & {
  age: number
}
2.相同接口(定义相同接口名,添加新字段。type不允许定义相同接口名)
interface Point {
  d: number
}
```

**7.类型断言： 手动指定一个值的类型**
```   使用：  value as type(建议使用),    <type>value   ```
```
用途：
1.联合类型断言为一个类型；（可能造成编译正常， 运行报错）
2.断言更加具体的类型；
   const canvas = document.getElementById('id_canvas')  as HTMLCanvasElement
   const canvas = <HTMLCanvasElement>document.getElementById('id_canvas')
```
**8.文字类型**
```
let a: 'hello' = 'hello'
let union: 'hello' | number = 100
union = 'hello'
let b: true = true

使用：
function request(url: string, method: 'GET' | 'POST'){}
const req = {
  url: 'http://baidu.xxx.com',
  method: 'GET'      //推断req.method的类型为string
}
request(req.url, req.method)    //error: req.method不是文字类型
request(req.url, req.method as 'GET')
```
