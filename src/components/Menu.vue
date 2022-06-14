<template>
 <navbar/>
        <div class="menu" style="margin-top: 90px; ">
            <Menuitem
            v-for="(item, index) in menutree"
            :key="index"
            :label="item.label"
            :name="item.name"
            :path="item.path"
            :data="item.children"
            :depth="item.depth"
            />
              <Menuitem
            v-for="(item, index) in menutree1"
            :key="index"
            :label="item.label"
            :name="item.name"
            :path="item.path"
            :data="item.children"
            :depth="item.depth"
            />
    </div>
</template>

<script>
import Menuitem from './Menuitem.vue'
import navbar from './Navbar.vue'
export default {
  name: 'recursive-menu',
  data: () => ({
    menutree:[
        {
            label: 'DOCUMENTATION',
            name:'首页',
            path:'/',
            children:[
                {
                    name:'首页',
                    path:'/',

                },
                {
                    name:'Holla',
                    path:'/holla',
                }
                
            ]
        },
        {
            name:'文章',
            path:'/article',
             children:[
                {
                    name:'首页',
                    path:'/'
                },
                {
                    name:'Holla',
                }
                
            ]
        },
        {
            name:'关于',
            path:'/about'
        }
        
    ],
    menutree1:[
        {
            label: 'PRODUCT',
            name:'首页',
            path:'/',
            children:[
                {
                    name:'首页',
                    path:'/',

                },
                {
                    name:'Holla',
                    path:'/holla',
                }
                
            ]
        },
        {
            name:'文章',
            path:'/article',
             children:[
                {
                    name:'首页',
                    path:'/'
                },
                {
                    name:'Holla',
                }
                
            ]
        },
        {
            name:'关于',
            path:'/about'
        }
        
    ]
  }),
  components : {
    Menuitem,
    navbar
  }

}

</script>

<style>
.menu{
    position: fixed;
    height: 100vw;
    width: 20rem;
    left:0;
    top:0;
    border-right: 1px solid #ececec;
    transition: all .3s ease;
    overflow: auto;

}



@media (max-width: 1920px) {
  .menu{
    max-width: 30rem;
    
  }
}

@media (max-width: 1750px) {
  .menu{
    width: 15rem;
  }
}

@media screen and (max-width: 1600px) {
  .menu{
    width: 13rem;
  }
}

@media screen and (max-width: 1500px) {
  .menu{
    width: 11rem;
  }
}
    
    


@media (max-width: 1366px) {
  .menu{
    max-width: 20rem;
  }
}

</style>