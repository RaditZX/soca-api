<template>
<div class="container">
    <h1>Overview</h1>
    <div class="line">

    </div>
    <div class="desc">
        <p>
            SOCA AI Platform is a pay-as-you-go solution, designed to help education & other fields with artificial intelligence and analytics, and turning it into actionable intelligence – whether to strengthen a business or as an essential business tool to help organizations streamline operations, improve monitoring.
        </p>

    </div>
    <div class="flex-container">
        <a href="">
            <div class="previous">
                <span>Previous</span>
                <p>SOCA.AI</p>
            </div>
        </a>   
        <a href="">
            <div class="previous" style="text-align: left;"> 
                <span>Next</span>
                <p>SOCA.AI</p>
            </div>
        </a>  
    </div>
     <div class="line">

    </div>
</div>

</template>

<style>
.line{
    border-bottom: 1px solid rgb(216, 214, 214);
    width: 800px;
    height: 30px;

}
.desc{
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    max-width: 900px;
}

a{
       text-decoration: none;
}
.previous{
    display: block;
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    width: 300px;
    text-align: right;
    padding: 0 4px;
    color: #000;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 2rem;
    
    
}
.previous span{
   
    font-size: 12px;
  
}

h1{
    font-size: 50px;
    font-weight: 700;
    text-decoration: none;
    margin-top: 20px;
}

.flex-container :hover{
    color: blue;
    border-color: blue;
    text-decoration: none;
}
 

.flex-container {
  display: flex;
  flex-direction: row;
    justify-content: center;
    
}
@media  (max-width: 1920px) {
  .container{
    max-width: 800px;
  }
}

@media screen and (max-width: 1366px) {
  .container{
    max-width: 800px;
  }
}




</style>
