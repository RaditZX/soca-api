<template>
    <nav class="navbar sticky-top navbar-light bg-white py-3"  >
      <div class="container-xxl" >
        <div class="vline">
           <div class="menu-toogle" style="" ref="side" @click="sideclick()">
            <span></span>
            <span></span>
            <span></span>
        </div>
          <a class="navbar-brand" href="#" >
            <img src="../assets/logo512.png" alt="" width="40" height="40" class="d-inline-block align-text-top">
            SOCA.AI
          </a>
        </div>
          <div class="d-flex">
            <div class="icon" style="padding: 4px 15px 0px 20px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <div class="texts" style="padding: 4px 0px 0px 8px;">
              <p>Search..</p>
            </div>
          </div>
      </div>
    </nav>
    <div class="container-xxl" >
      <div class="layout" >
        <div class="menu" id="menu" ref="menu" >
            <Menuitem 
               v-for="(item, index) in menutree0"
            :key="index"
            :label="item.label"
            :name="item.name"
            :path="item.path"
            :data="item.children"
            :icon = "item.icon"
            :depth="item.depth"
            />
             <br/>
            <Menuitem
            v-for="(item, index) in menutree"
            :key="index"
            :label="item.label"
            :name="item.name"
            :path="item.path"
            :data="item.children"
            :icon = "item.icon"
            :depth="item.depth"
            />
            <br/>
          <div class="menu-item2" >
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
         <div class="menu-item3" style="margin-top: 20px;" >
            <Menuitem
            v-for="(item, index) in menutree2"
            :key="index"
            :label="item.label"
            :name="item.name"
            :path="item.path"
            :icon = "item.icon"
            :data="item.children"
            :depth="item.depth"
            />
         </div>
        </div>
        <div class="content">
          <router-view/>
        </div>
     </div>
    </div>

</template>

<script>
import Menuitem from './Menuitem.vue'
export default {
  name: 'Main',
  data: () => ({
    sideshow: false,
    menutree0: [
      {
        name: 'SOCA AI  ',
        path: '/',
      }
      ],
    menutree:[
        {
            label: 'DOCUMENTATION',
            name:'Overview',
            path:'/overview',
        },
        {
            name:'Getting Started',
            path:'/started',
        },
        {
            name:'ChangeLogs',
            path:'/changelogs'
        },
        {
            name:'LegalDocument',
            path:'/legalDocument',
            icon:'M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z',
            children:[
              {
                name:'Terms of Service',
                path:'/legaldocument/terms'
              },
              {
                name:'Privacy Policy',
                path:'/legaldocument/privacy-policy'
              },
              {
                name:'Security Policy',
                path:'/legaldocument/security-policy'
              },
              {
                name:'Cookies Policy',
                path:'/legaldocument/cookies-policy'
              }
            ]

        }
        
    ],
    menutree1:[
        {
            label: 'PRODUCT',
            name:'Soca Rupa',
            path:'/socarupa',
        },
        {
            name:'Soca Ganita',
            path:'/socaganita',
        },
        
    ],
     menutree2:[
        {
            label: 'Usecases',
            name:'Face Authentication (soon)',
            path:'/face-authentication',
        },
        {
            name:'Proctoring AI',
            path:'/Proctoring-AI',
            icon:'M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z',
             children:[
                {
                    name:'Face Recognition',
                    path:'/Proctoring-AI/face-recognation'
                },
                {
                    name:'proctoring',
                    path:'/Proctoring-AI/proctoring'
                },
                {
                    name:'Object Recognition',
                    path:'/Proctoring-AI/object-recognation'
                },
                {
                    name:'Movement Detection',
                    path:'/Proctoring-AI/movement-detection'
                }
                
            ]
        },
        {
            name:'AI Counter (Soon)',
            path:'/AI-counter'
        },
        {
            name:'Text Analytics (Soon)',
            path:'/Text-analytics'
        }
        
    ]
  }),
  methods: {
    sideclick(){
      if (!this.sideshow) {
        this.sideshow = true
        this.$refs.menu.style.display= 'block'
      }
      else{
          this.sideshow = false
          this.$refs.menu.style.display= 'none'
      }
    },
    

  },
  components : {
    Menuitem,
  }

}

</script>


