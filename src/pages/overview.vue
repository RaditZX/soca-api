<template>
<div class="container">
    <h1>Overview</h1>
    <div class="line"></div>
        <div class="desc">
            <p>
                SOCA AI Platform is a pay-as-you-go solution, designed to help education & other fields with artificial intelligence and analytics, and turning it into actionable intelligence – whether to strengthen a business or as an essential business tool to help organizations streamline operations, improve monitoring.
            </p>
        </div>
            <div class="flex-container">
               <div class="button-route" >
                    <router-link to="/socaAI">
                        <div class="previous">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                            </div>
                            <div class="text">
                                <span>Previous</span>
                                <p>SOCA.AI</p>
                            </div>
                        </div>    
                    </router-link>     
                </div>
                <div class="button-route" >
                    <router-link to="/started">
                        <div class="previous" style="text-align: left;">
                            <div class="text">
                                <span>Next</span>
                                <p>Getting Started</p>
                            </div>
                            <div class="icon" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </div>
                    
                        </div>
                    </router-link>
                </div>
            </div>
     <div class="line">
    </div>
</div>

</template>
<script>
export default {
    name: 'Overview',
}
</script>

<style>
.line{
    border-bottom: 1px solid rgb(216, 214, 214);
    width: 775px;
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

.button-route{
    flex: 50%;
}

.flex-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  
    
}

router-link{
    text-decoration: none;
}

.flex-container .previous{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    padding: 5px 20px;
    flex-basis: 100%;
    text-align: right;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    color: #000;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 5px;
   
    
    
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
 



.icon{
    padding-top: 15px;
    width: 30px;

}

.text{
    width: 100%;

}



@media  screen and (max-width: 1920px) {
  .container{
    max-width: 800px;
  }
}

@media screen and (max-width: 1800px) {
  .container{
    max-width: 780px;
  }
  .line{
    width: 760px;
  }
}

@media screen and (max-width: 1700px) {
  .container{
    max-width: 700px;
  }
  .line{
    width: 700px;
  }
    
}

@media screen and (max-width: 1600px) {

  .line{
    width: 740px;
  }
}

@media screen and (max-width: 1500px) {

  .line{
    width: 720px;
  }
}
    
@media screen and (max-width: 1400px) {
  .container{
    max-width: 700px;
  }
  .previous{
    width: 20rem;
  }
  .line{
    width: 700px;
  }
}

@media  screen and (max-width: 1366px) {
  .previous{
    width: 18rem;
  }
  .line{
    width: 700px;
  }
}

@media screen and (max-width: 1280px) {
  .previous{
    width: 20rem;
  }
    .line{
        width: 680px;
    }
    
}

@media screen and (max-width: 1200px) {
    .line{
        width: 680px;
    }
    
}

@media screen and (max-width: 1100px) {
    .line{
        width: 680px;
    }
    
}
    

@media  screen and (max-width: 700px) {
  .container{
    max-width: 680px;
    overflow-x: hidden;
  }
  .previous{
    width: 100%;
  }
    .line{
        width: 680px;
    }
   
   .flex-container{
    flex-direction: column;
    justify-content: center;
    width: 100%;

   }
   h1{
    font-size: 30px;

   }

   .flex-containers
   {
    align-items: flex-start;
    text-align: left;
    width: 100%;

   }
    
}
    

</style>
