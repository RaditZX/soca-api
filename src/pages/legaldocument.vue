<template>
<div class="container" id="content-container" >
    <div class="row">
        <div class="col-md-12">
            <div class="page-header">
                <h1>Legal Document</h1>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="row">
        <div class="col-md-12 mt-2">
            <p class="">Here are articles in this section:</p>
        </div>
    </div>
    <div class="flex-container">
        <div class="button-route">
            <router-link to="/legaldocument/terms" >
                <div class="previous" style="text-align: left; padding: 10px;">
                    <p>Terms of Service</p>
                </div>
            </router-link>  
        </div>
        <div class="button-route">
            <router-link to="/legaldocument/security-policy" >
                <div class="previous" style="text-align: left;  padding: 10px;;"> 
                    <p>Security Policy</p>
                </div>
            </router-link>
        </div>
    </div>
    <div class="flex-container">
        <div class="button-route">
            <router-link to="/legaldocument/privacy-policy" >
                <div class="previous" style="text-align: left;  padding: 10px;">
                    <p>Privacy Policy</p>
                </div>
            </router-link>
        </div>
        <div class="button-route">
            <router-link to="/legaldocument/cookies-policy">
                <div class="previous" style="text-align: left;  padding: 10px;"> 
                    <p>Cookies Policy</p>
                </div>
            </router-link> 
        </div>
    </div>
    <div class="flex-container">
        <div class="button-route">
            <router-link to="/changelogs">
                <div class="previous">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </div>
                    <div class="text">
                    <span>Previous</span>
                    <p>ChangeLogs</p>
                    </div>
                </div>
            </router-link>   
        </div>
        <div class="button-route">
            <router-link to="/legaldocument/terms">
                <div class="previous" style="text-align: left;"> 
                    <div class="text">
                        <span>Next</span>
                        <p>Terms of Service</p>
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
    <div class="line"></div>
</div>
</template>