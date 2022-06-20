<template>
    <div class="container">  
        <div class="menu-item" >
            <div class="header">
                {{label}}
            </div>
        <router-link :to="`${path}`">
        <div class="label" ref="label"  @click="toogleMenu()">
            <span>{{ name }} </span> <svg ref="icon" style="margin-top: 3px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                <path :d="`${icon}`"/>
            </svg>
        </div>
        </router-link>
            <div class="items-container"   ref="container" v-show="showChildren">
            <menu-item
                v-for="(item, index) in data"
                    :key="index"
                    :label="item.label"
                    :name="item.name"
                    link :path="item.path"
                    :data="item.children"  
                />
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/menu-item.css";
export default {
    name: 'menu-item',
    data: () => ({
        showChildren: false,
   
    }),
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },

        data: {
            type: Array,
        }
    },
    methods: {
        toogleMenu(){
           if (!this.showChildren) {
            this.showChildren = true;
            this.$nextTick(() => {
            this.containerHeight = this.$refs["container"].scrollHeight + "px";
            this.$refs["icon"].style.transition = "transform 0.3s ease-in-out";
            this.$refs["icon"].style.transform = "rotate(90deg)";
            setTimeout(() => {
                this.containerHeight = "fit-content";
                if(navigator.userAgent.indexOf("Firefox") != -1) 
                this.containerHeight = "-moz-max-content"
                this.$refs["container"].style.transition = "transform 0.3s ease-in-out";
                this.$refs["container"].style.overflow = "visible";
            }, 300);
        });
        } else {
            this.containerHeight = this.$refs["container"].scrollHeight + "px";
            this.$refs["container"].style.overflow = "hidden";
            this.$refs["icon"].style.transform = "rotate(0deg)";

            setTimeout(() => {
            this.containerHeight = 0 + "px";
            }, 10);
            setTimeout(() => {
            this.showChildren = false;
            }, 100);
        }
 
        
        }
       
    }
}
</script>

<style>
a.active.router-link-exact-active > .label {
    background-color: white;
    color:blue;
    border : 1px solid rgb(219, 218, 218);
}
</style>


