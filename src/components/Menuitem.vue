<template>
<div class="container">  
    <div class="menu-item">
        {{label}}
       <div class="label"  @click="toogleMenu()">
            <span>{{ name }}</span>
       </div>
         <div class="items-container" style="margin-left: 20px;"  ref="container" v-show="showChildren">
           <router-link to="{{ path }}"><menu-item
            v-for="(item, index) in data"
                :key="index"
                :label="item.label"
                :name="item.name"
                :path="item.path"
                :data="item.children"
              
            />
            </router-link>
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
            setTimeout(() => {
                this.containerHeight = "fit-content";
                if(navigator.userAgent.indexOf("Firefox") != -1) 
                this.containerHeight = "-moz-max-content"
                this.$refs["container"].style.overflow = "visible";
            }, 300);
        });
        } else {
            this.containerHeight = this.$refs["container"].scrollHeight + "px";
            this.$refs["container"].style.overflow = "hidden";
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


