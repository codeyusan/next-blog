> 强缓存

- expires:  服务端定义的一个时间
  - 存在问题：服务端和客户端存在时差，客户端时间可以修改
- cache-control: （优先级比expires高，expires的存在是为了应用向下兼容）解决时间存在误差的问题
  - max-age=相对时间，以浏览器获取到请求资源作为相对时间的起点
  - s-maxaage=相对时间，向代理服务器发起请求（优先级比max-age高）
  - no-cache, 绕过浏览器，进入协商缓存判断
  - no-store,不使用缓存，直接发起请求

> 协商缓存:浏览器向服务器询问是否存在缓存，存在缓存`重定向304`

- Last-Modified: 服务端时间（Response Headers），最后一次编辑文件的时间
  - If-Modified-Since:值为Last-Modified的值（请求携带）
  - 存在问题：编辑文件，但内容未改动；编辑文件时间小于1s；last-modified服务端时间都会改变，会造成重新请求资源

- Etag:服务器为每个资源生成的唯一标识符(优先级高)（Response Headers），解决Last-Modified存在的问题
  - If-None-Match:值为E-tag的值（请求携带）
