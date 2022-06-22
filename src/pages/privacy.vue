<template>
<div class="container" id="content-container">
    <div class="row">
        <div class="col-md-12">
            <div class="page-header">
                <h1>Privacy Policy</h1>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="row">
        <div class="col-md-12 mt-5">
        </div>
    </div>
     <div class="flex-container">
        <div class="button-route">
            <router-link to="/legaldocument/terms">
                <div class="previous">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </div>
                    <div class="text">
                        <span>Previous</span>
                        <p>Terms of Services</p>
                    </div>
                </div>
            </router-link>  
        </div>
        <div class="button-route">
            <router-link to="/legaldocument/security-policy">
                <div class="previous" style="text-align: left;"> 
                    <div class="text">
                        <span>Next</span>
                        <p>Security Policy</p>
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