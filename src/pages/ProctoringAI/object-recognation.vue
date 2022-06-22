<template>
    <div class="container" id="content-container">
         <h1>Object Recognation</h1>
            <div class="line"></div>
                <div class="desc">
                    <p> Object Recognition is a general term to describe a collection of related computer vision tasks that involve identifying objects in digital photographs.</p>
                </div>
                  <div class="desc">
                    <p> Image classification involves predicting the class of one object in an image. Object localization refers to identifying the location of one or more objects in an image and drawing abounding box around their extent. Object recognition combines these two tasks and localizes and classifies one or more objects in an image.</p>
                </div>
                <div class="image">
                    <img src="../../assets/Feed 2-1.png" alt="">
                    <span>Illustration SOCA Face Recognition & Face Detection</span>
                </div>
                 <div class="desc">
                    <p style="font-weight:bold;">
                What is object recognition used for?
                    </p>
                </div>
                <div class="desc">
                    <p >
                Object recognition is a <strong> computer vision technique for identifying objects in images or videos.</strong> Object recognition is a key output of deep learning and machine learning algorithms. When humans look at a photograph or watch a video, we can readily spot people, objects, scenes, and visual details.
                    </p>
                </div>
            <div class="line"></div>
                <h2>API Documentation For Using Object Recognition</h2>
                    <div class="desc">
                        <p> Before using object recognition api, you must first register user data (master data). Below are api-docs documentation for user data which can later be monitored by object detection api referring to the unique code entered.</p>
                    </div>
             <div class="row mt-3">
                <div class="col-md-12 mt-2">
                    <div class="advantagebox" style=" border-left: 5px solid blue;">
                            <div class="row">
                                <div class="flex-containers">
                                    <div class="checkicon">
                                        <svg style="color: blue;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg>
                                    </div>
                                    <div class="col-md-12 mt-2">
                                        <a href=""><strong>API Service Documentation SOCA A.I</strong></a>
                                          <p><a href="">API Service Documentation SOCA A.I</a></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="desc">
                <p>Here are the steps for using object recognition api according to the flow:</p>
            </div>
            <div class="row">
                <div class="col-md-12 mt-2">
                    <h3>1. Users (Master Data)</h3>
                    <p>To manage the master data of users taking exams using a object recognition service.</p>
                    <div class="api-details">
                        <div class="head">
                            <div class="api-head">
                               <div class="api-icon">
                                GET
                               </div>
                                <div class="link">
                                    <p style="color:rgba(136,153,168,1.00) ;">https://127.0.0.1:5000/api</p>
                                    <p style="font-weight: bold;">/v1/users</p>
                                </div>
                            </div>
                            <div class="button-details" ref="buttondetails" @click="showdetails()">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                  
                        </div>
                        <p style="font-weight: bold; margin-left:8px;">Retrieve List All User Data</p>
                        <div class="details" ref="details">
                            <p>To retrieve a list of user images data that is being tested using proctoring service, by taking data using the presented parameters.</p>
                            <p style="font-weight: bold; padding-top: 10px ;">Parameters</p>
                            <p style="font-weight: bold;">Query</p>
                            <div class="query">
                                <p >page</p>
                                <p style="padding-left: 193px;">string</p>
                                <p style="padding-left: 50px;">set page for pagination data</p>
                             </div>
                               <div class="query">
                                <p >limit</p>
                                <p style="padding-left: 198px;">string</p>
                                <p style="padding-left: 50px;">set limit data for pagination data</p>
                             </div>
                            <p style="font-weight: bold; padding-top: 10px ;">Headers</p>
                             <div class="query">
                                <p >token_client</p>
                                <p style="padding-left: 150px;">string</p>
                                <p style="padding-left: 50px;">using Token API Credentials in Detail Project</p>
                             </div>
                             <p style="font-weight: bold; padding-top: 10px ;">Responses</p>
                              <div class="query">
                                <p  style="font-weight: bold;">200: OK</p>
                                <p style="padding-left: 265px;">A successfull responses</p>
                             </div>
                        </div>

                    </div>
                      <div class="api-details" style="margin-top: 20px;">
                        <div class="head">
                            <div class="api-head">
                                <div class="api-icon">
                                GET
                               </div>
                                  <div class="link">
                                    <p style="color:rgba(136,153,168,1.00) ;">https://127.0.0.1:5000/api</p>
                                    <p style="font-weight: bold;">/v1/users/{id}</p>
                                </div>
                            </div>
                            <div class="button-details" ref="buttondetails1" @click="showdetails1()">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                  
                        </div>
                        <p style="font-weight: bold; margin-left:8px;">Retrieve One User Data Details</p>
                        <div class="details" ref="details1">
                            <p>To retrieve a one user data details that is being tested using proctoring service, by taking data using the presented parameters.</p>
                            <p style="font-weight: bold; padding-top: 10px ;">Parameters</p>
                            <p style="font-weight: bold;">Path</p>
                            <div class="query">
                                <p >id*</p>
                                <p style="padding-left: 210px;">string</p>
                                <p style="padding-left: 50px;">id of users to get details</p>
                             </div>
                            <p style="font-weight: bold; padding-top: 10px ;">Headers</p>
                             <div class="query">
                                <p >token_client</p>
                                <p style="padding-left: 150px;">string</p>
                                <p style="padding-left: 50px;">using Token API Credentials in Detail Project</p>
                             </div>
                             <p style="font-weight: bold; padding-top: 10px ;">Responses</p>
                              <div class="query">
                                <p  style="font-weight: bold;">200: OK</p>
                                <p style="padding-left: 265px;">A successfull responses</p>
                             </div>
                        </div>

                    </div>
                    <div class="api-details" style="margin-top: 20px;">
                        <div class="head">
                            <div class="api-head">
                                <div class="api-icon-post">
                                POST
                               </div>
                                  <div class="link">
                                    <p style="color:rgba(136,153,168,1.00) ;">https://127.0.0.1:5000/api</p>
                                    <p style="font-weight: bold;">/v1/users</p>
                                </div>
                            </div>
                            <div class="button-details" ref="buttondetails2" @click="showdetails2()">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                  
                        </div>
                        <p style="font-weight: bold; margin-left:8px;">Create User Data</p>
                        <div class="details" ref="details2">
                            <p>To retrieve a one user data details that is being tested using proctoring service, by taking data using the presented parameters.</p>
                            <p style="font-weight: bold; padding-top: 10px ;">Parameters</p>
                             <p style="font-weight: bold; padding-top: 10px ;">Headers</p>
                             <div class="query">
                                <p >token_client</p>
                                <p style="padding-left: 146px;">string</p>
                                <p style="padding-left: 53px;">using Token API Credentials in Detail Project</p>
                             </div>
                            <p style="font-weight: bold;">Body</p>
                            <div class="query">
                                <p >unique_code*</p>
                                <p style="padding-left: 135px;">string</p>
                                <p style="padding-left: 50px;">A unique code owned by a user such as a username or user id.</p>
                             </div>
                              <div class="query">
                                <p >full_name*</p>
                                <p style="padding-left: 155px;">string</p>
                                <p style="padding-left: 50px;">full_Name owned by users.</p>
                             </div>
                             <p style="font-weight: bold; padding-top: 10px ;">Responses</p>
                              <div class="query">
                                <p  style="font-weight: bold;">200: OK</p>
                                <p style="padding-left: 257px;">A successfull responses</p>
                             </div>
                        </div>

                    </div>

                    <div class="api-details" style="margin-top: 20px;">
                        <div class="head">
                            <div class="api-head">
                                <div class="api-icon-put">
                                PUT
                               </div>
                                  <div class="link">
                                    <p style="color:rgba(136,153,168,1.00) ;">https://127.0.0.1:5000/api</p>
                                    <p style="font-weight: bold;">/v1/users/{id}</p>
                                </div>
                            </div>
                            <div class="button-details" ref="buttondetails3" @click="showdetails3()">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                  
                        </div>
                        <p style="font-weight: bold; margin-left:8px;">Update User Data</p>
                        <div class="details" ref="details3">
                            <p>To retrieve a one user data details that is being tested using proctoring service, by taking data using the presented parameters.</p>
                            <p style="font-weight: bold; padding-top: 10px ;">Parameters</p>
                             <p style="font-weight: bold; padding-top: 10px ;">Headers</p>
                             <div class="query">
                                <p >token_client</p>
                                <p style="padding-left: 146px;">string</p>
                                <p style="padding-left: 53px;">using Token API Credentials in Detail Project</p>
                             </div>
                            <p style="font-weight: bold;">Body</p>
                            <div class="query">
                                <p >unique_code*</p>
                                <p style="padding-left: 135px;">string</p>
                                <p style="padding-left: 50px;">A unique code owned by a user such as a username or user id.</p>
                             </div>
                              <div class="query">
                                <p >full_name*</p>
                                <p style="padding-left: 155px;">string</p>
                                <p style="padding-left: 50px;">full_Name owned by users.</p>
                             </div>
                             <p style="font-weight: bold; padding-top: 10px ;">Responses</p>
                              <div class="query">
                                <p  style="font-weight: bold;">200: OK</p>
                                <p style="padding-left: 257px;">A successfull responses</p>
                             </div>
                        </div>

                    </div>

                    <div class="api-details" style="margin-top: 20px;">
                        <div class="head">
                            <div class="api-head">
                               <div class="api-icon-delete">
                                DELETE
                               </div>
                                  <div class="link">
                                    <p style="color:rgba(136,153,168,1.00) ;">https://127.0.0.1:5000/api</p>
                                    <p style="font-weight: bold;">/v1/users{id}</p>
                                </div>
                            </div>
                            <div class="button-details" ref="buttondetails4" @click="showdetails4()">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                  
                        </div>
                        <p style="font-weight: bold; margin-left:8px;">Delete One User Data</p>
                        <div class="details" ref="details4">
                            <p>To retrieve a one user data details that is being tested using proctoring service, by taking data using the presented parameters.</p>
                            <p style="font-weight: bold; padding-top: 10px ;">Parameters</p>
                             <p style="font-weight: bold; padding-top: 10px ;">Headers</p>
                             <div class="query">
                                <p >token_client</p>
                                <p style="padding-left: 146px;">string</p>
                                <p style="padding-left: 53px;">using Token API Credentials in Detail Project</p>
                             </div>
                            <p style="font-weight: bold;">Body</p>
                            <div class="query">
                                <p >unique_code*</p>
                                <p style="padding-left: 135px;">string</p>
                                <p style="padding-left: 50px;">A unique code owned by a user such as a username or user id.</p>
                             </div>
                              <div class="query">
                                <p >full_name*</p>
                                <p style="padding-left: 155px;">string</p>
                                <p style="padding-left: 50px;">full_Name owned by users.</p>
                             </div>
                             <p style="font-weight: bold; padding-top: 10px ;">Responses</p>
                              <div class="query">
                                <p  style="font-weight: bold;">200: OK</p>
                                <p style="padding-left: 257px;">A successfull responses</p>
                             </div>
                        </div>


                    </div>
                
                
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-12 mt-2">
                    <h3>2. Object Recognition Service</h3>
                    <p>After the user data has been registered, the user can start using the object recognition service by entering the unique code and image data to be processed in Base64 format.</p>
                    <h5 style="margin-bottom: 30px ;">(max file size : 800kb)</h5>
                    <div class="api-details">
                        <div class="head">
                            <div class="api-head">
                                <div class="api-icon-post">
                                POST
                               </div>
                                <div class="link">
                                    <p style="color:rgba(136,153,168,1.00) ;">https://127.0.0.1:5000/api</p>
                                    <p style="font-weight: bold;">/v1/object-detection</p>
                                </div>
                            </div>
                            <div class="button-details" ref="buttondetails5" @click="showdetails5()">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                  
                        </div>
                        <p style="font-weight: bold; margin-left:8px;">Object Detection Service</p>
                        <div class="details" ref="details5">
                            <p>To retrieve a list of user images data that is being tested using proctoring service, by taking data using the presented parameters.</p>
                            <p style="font-weight: bold; padding-top: 10px ;">Parameters</p>
                            <p style="font-weight: bold;">Query</p>
                            <div class="query">
                                <p >page</p>
                                <p style="padding-left: 193px;">string</p>
                                <p style="padding-left: 50px;">set page for pagination data</p>
                             </div>
                               <div class="query">
                                <p >limit</p>
                                <p style="padding-left: 198px;">string</p>
                                <p style="padding-left: 50px;">set limit data for pagination data</p>
                             </div>
                            <p style="font-weight: bold; padding-top: 10px ;">Headers</p>
                             <div class="query">
                                <p >token_client</p>
                                <p style="padding-left: 150px;">string</p>
                                <p style="padding-left: 50px;">using Token API Credentials in Detail Project</p>
                             </div>
                             <p style="font-weight: bold; padding-top: 10px ;">Responses</p>
                              <div class="query">
                                <p  style="font-weight: bold;">200: OK</p>
                                <p style="padding-left: 265px;">A successfull responses</p>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
            <h3 class="mt-5">Responses Body</h3>
            <div class="row mt-5">
                <div class="col-md-12 mt-2">
                    <div class="code-all">
                        <div class="code"  >
                            <pre >
<code ref="jsoncode">
{
  "status": true,
  "message": "Proctoring Service Successfully",
  "data": [
      {
        "class": "Orang",
        "score": 0.5511986017227173,
        "rect": {
          "x1": 136,
          "y1": 163,
          "x2": 257,
          "y2": 358
        }
      },
      {
        "class": "Laptop",
        "score": 0.9975941777229309,
        "rect": {
          "x1": 218,
          "y1": 263,
          "x2": 308,
          "y2": 344
        }
      }
  ],
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
            <div class="line"></div>
            <h1 class="mt-5">Example Implementation</h1>
            <div class="image-flex">
                    <img class="mt-5" src="../../assets/Screen Shot 2022-01-05 at 17.50.13.png" alt="">
                    <img class="mt-5" style="height: 87.5%;" src="../../assets/Screen Shot 2022-01-05 at 17.52.13.png" alt="">
                    <img class="mt-5" style="height: 87.5%;" src="../../assets/Screen Shot 2022-01-05 at 17.57.26.png" alt="">
                </div>
            </div>
            <div class="count">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
                <div class="flex-container">
                    <div class="button-route">
                        <router-link to="/Proctoring-AI/proctoring">
                            <div class="previous">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                </div>
                                <div class="text">
                                    <span>Previous</span>
                                    <p>Proctoring</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="button-route">
                        <router-link to="/Proctoring-AI/movement-detection">
                            <div class="previous" style="text-align: left;">
                                <div class="text">
                                    <span>Next</span>
                                    <p>Movement Detection</p>
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
export default {
        name: 'proctoring',
        data() {
            return {
                show: false
            }
        },
        methods: {

            copy(){
                var jsoncode = this.$refs.jsoncode.innerHTML;
                navigator.clipboard.writeText(jsoncode);
            },
            showdetails() {
                if (this.show == false) {
                    this.show = true
                    this.$refs.details.style.display = "block"
                    this.$refs.buttondetails.style.transform = "rotate(90deg)"
                    this.$refs.buttondetails.style.transition = "all 0.5s"
                } else {
                    this.show = false
                    this.$refs.details.style.display = "none"
                    this.$refs.buttondetails.style.transform = "rotate(0deg)"
                    this.$refs.buttondetails.style.transition = "all 0.5s"
                }
            },
             showdetails1() {
                if (this.show == false) {
                    this.show = true
                    this.$refs.details1.style.display = "block"
                    this.$refs.buttondetails1.style.transform = "rotate(90deg)"
                    this.$refs.buttondetails1.style.transition = "all 0.5s"
                } else {
                    this.show = false
                    this.$refs.details1.style.display = "none"
                    this.$refs.buttondetails1.style.transform = "rotate(0deg)"
                    this.$refs.buttondetails1.style.transition = "all 0.5s"
                }
            },
             showdetails2() {
                if (this.show == false) {
                    this.show = true
                    this.$refs.details2.style.display = "block"
                    this.$refs.buttondetails2.style.transform = "rotate(90deg)"
                    this.$refs.buttondetails2.style.transition = "all 0.5s"
                } else {
                    this.show = false
                    this.$refs.details2.style.display = "none"
                    this.$refs.buttondetails2.style.transform = "rotate(0deg)"
                    this.$refs.buttondetails2.style.transition = "all 0.5s"
                }
            },
            showdetails3() {
                if (this.show == false) {
                    this.show = true
                    this.$refs.details3.style.display = "block"
                    this.$refs.buttondetails3.style.transform = "rotate(90deg)"
                    this.$refs.buttondetails3.style.transition = "all 0.5s"
                } else {
                    this.show = false
                    this.$refs.details3.style.display = "none"
                    this.$refs.buttondetails3.style.transform = "rotate(0deg)"
                    this.$refs.buttondetails3.style.transition = "all 0.5s"
                }
            },
            showdetails4() {
                if (this.show == false) {
                    this.show = true
                    this.$refs.details4.style.display = "block"
                    this.$refs.buttondetails4.style.transform = "rotate(90deg)"
                    this.$refs.buttondetails4.style.transition = "all 0.5s"
                } else {
                    this.show = false
                    this.$refs.details4.style.display = "none"
                    this.$refs.buttondetails4.style.transform = "rotate(0deg)"
                    this.$refs.buttondetails4.style.transition = "all 0.5s"
                }
            },
            showdetails5() {
                if (this.show == false) {
                    this.show = true
                    this.$refs.details5.style.display = "block"
                    this.$refs.buttondetails5.style.transform = "rotate(90deg)"
                    this.$refs.buttondetails5.style.transition = "all 0.5s"
                } else {
                    this.show = false
                    this.$refs.details5.style.display = "none"
                    this.$refs.buttondetails5.style.transform = "rotate(0deg)"
                    this.$refs.buttondetails5.style.transition = "all 0.5s"
                }
            },
        }
    }
</script>

<style>
.count{
    display: flex;
    justify-content: center;
    align-items: center;
}

.count > span {
    flex: 33.33333%;
    text-align: center;
}
</style>

