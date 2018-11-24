# 简单的node server服务
1. 环境搭建（mac）
    * [安装node和npm] (https://blog.csdn.net/u012982629/article/details/80526385) 
2. 安装依赖
    
    ```
    # 根目录下执行
    npm install 
    ```
3. run server


    ```
    # 根目录下执行
    npm start
    ```
    
4. 接口测试
    * GET 
    
    
      ```
      http://localhost:8083
      ```
      
    * POST
    
    
      ```
      url:http://localhost:8083/post
      param:{"name": "roby","gender":"male"} //随意
      Content-type:application/json
      ```
