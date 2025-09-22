package main

import (
    "github.com/gin-gonic/gin"
)

func main(){
    r := gin.Default()
    r.GET("/", func(c *gin.Context){
        c.String(200, "Hello from Order Service (Go Gin)")
    })
    r.Run(":8081")
}