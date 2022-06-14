<template>
    <div class="container">
         <h1>Getting Started</h1>
        <div class="line"></div>
            <h2>Register or Login to Dashboard</h2>
            <div class="desc">
                <p>
                   First , you need to login or register at <a href="">https://soca.ai/login </a> Or just click <a href=""> here </a> if you need to set up your account for the first time.
                </p>
            </div>
            <div class="image">
                <img src="../assets/loginSoca.png" alt="">
                 <span>Illustration Login or Register</span>
            </div>

            <div class="line"></div>

             <h2>Create Project</h2>
            <div class="desc">
                <p>
                   After you have your account logged in, you must first create a project. The form for creating a project is as shown in the image below.
                </p>
            </div>
            <div class="image">
                <img src="../assets/addproject.png" alt="">
                 <span>Illustration Create Project</span>
            </div>

            <div class="line"></div>

            <h2>Check Details</h2>
            <div class="desc">
                <p>
                   Then you click the details button on the project you want.
                </p>
            </div>
            <div class="image">
                <img src="../assets/project.png" alt="">
                 <span>Illustration Page Project</span>
            </div>

            <div class="line"></div>

             <h2>Go to Tab API Credentials & Copy Token Client</h2>
            <div class="desc">
                <p>
                   Click Tab "API Credentials"  and click the “Copy” button to automatically get the Token Client.
                </p>
            </div>
            <div class="image">
                <img src="../assets/tokenclient.png" alt="">
                <span>Illustration Page API Credentials</span>
            </div>

            <div class="line"></div>
            
             <h2>Using Token Client For Authorization Key</h2>
            <div class="desc">
                <p>
                  Send a POST request to https://api-cloud.soca.ai/auth/signatures, by providing these arguments as application/json with request payload:
                </p>
            </div>
            <div class="code">
                <span>you must be post headers similar to this:</span><br/>
                <code>{<br/>
                    "headers": {<br/>
                        "token_client":"34c513672bb7c4918d52cea989fba1060f8084ece5135df5155c2dec2d98cff1"<br/>
                    },<br/>
                    }
                </code>
            </div>

            <div class="line"></div>

              <h2>Select Usecase</h2>
            <div class="desc">
                <p>
                   Please choose the use case that you want to explore.
                </p>
            </div>
             <div class="test">
                <a href="">
                    <div class="button">
                        <p>Face Authentication (Soon)  </p>
                    </div>
                </a>
            </div>
             <div class="test">
                <a href="">
                    <div class="button">
                        <p>Proctoring AI  </p>
                    </div>
                </a>
            </div>
             <div class="test">
                <a href="">
                    <div class="button">
                        <p>AI Counter (Soon)  </p>
                    </div>
                </a>
            </div>
             <div class="test">
                <a href="">
                    <div class="button">
                        <p>Text analytics (Soon)  </p>
                    </div>
                </a>
            </div>

            <div class="line"></div>

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
     <div class="line"></div>
    </div>
</template>

<style>

 h2{
        font-weight: 700;
        text-decoration: none;
        margin-top: 20px;
 }

 a :hover{
        text-decoration:underline;
 }

 .image > img{
        width: 100%;
        height: auto;

 }
 .image > span{
        font-size: 12px;
        display: flex;
        justify-content: center;
        color: rgb(194, 189, 189);
 }

 .button{
        display: flex;
        justify-content: left;
        margin-top: 20px;
        border: 1px solid rgb(194, 189, 189);
        font-weight: bold;
        font-size: 16px;
        padding: 10px;
        color: rgb(100, 100, 100);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        text-decoration: none;
 }

 .test :hover{
        color: blue;
        border-color: blue;
        cursor: pointer;
        text-decoration: none;
 }

 a{
        text-decoration: none;
 }

 
</style>