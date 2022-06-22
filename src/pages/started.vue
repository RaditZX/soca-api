<template>
    <div class="container" id="content-container">
         <h1>Getting Started</h1>
            <div class="line"></div>
                <h2>Register or Login to Dashboard</h2>
                <div class="desc">
                    <p> First , you need to login or register at <a href="">https://soca.ai/login </a> Or just click <a href=""> here </a> if you need to set up your account for the first time.</p>
                </div>
                <div class="image">
                    <img src="../assets/loginSoca.png" alt="">
                    <span>Illustration Login or Register</span>
                </div><div class="line"></div>

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
                 <div class="row mt-5">
                    <div class="col-md-12 mt-2">
                        <div class="code-all">
                            <div class="code"  >
                                <pre>
                                    <code ref="jsoncode">
{
  "headers": {
    "token_client":"34c513672bb7c4918d52cea989fba1060f8084ece5135df5155c2dec2d98cff1"
  },
}
                                    </code>
                                </pre>
                            </div>
                            <div class="copy-button" @click="copy()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                            <p>Face Authentication (Soon)  </p>
                        </div>
                    </a>
                </div>
                <div class="test">
                    <a href="">
                        <div class="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                            <p>Proctoring AI  </p>
                        </div>
                    </a>
                </div>
                <div class="test">
                    <a href="">
                        <div class="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                            <p>AI Counter (Soon)  </p>
                        </div>
                    </a>
                </div>
                <div class="test">
                    <a href="">
                        <div class="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                            <p>Text analytics (Soon)  </p>
                        </div>
                    </a>
                </div>

                <div class="line"></div>

                <div class="flex-container">
                    <div class="button-route">
                        <router-link to="/overview">
                            <div class="previous">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                </div>
                                <div class="text">
                                    <span>Previous</span>
                                    <p>Overview</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="button-route">
                        <router-link to="/changelogs">
                            <div class="previous" style="text-align: left;">
                                <div class="text">
                                    <span>Next</span>
                                    <p>ChangeLogs</p>
                                </div>
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div> 
            <div class="line"></div>
    </div>
</template>

<script>
export default{
    name:'Getting-Started',
    methods:{
        copy(){
                var jsoncode = this.$refs.jsoncode.innerHTML;
                navigator.clipboard.writeText(jsoncode);
            },
    }
}

</script>

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
        width: 80%;
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

 .button > p{
        margin-left: 10px;
        margin-top: 8px;

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