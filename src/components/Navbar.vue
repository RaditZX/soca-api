<template>
  <nav class="navbar sticky-top navbar-light bg-white py-3"  >
      <div class="container-xxl" >
        <a class="navbar-brand" href="#" >
          <img src="../assets/logo512.png" alt="" width="40" height="40" class="d-inline-block align-text-top">
          SOCA.AI
        </a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        data: () => ({

        })
        ,
    }

</script>

<style>
    .navbar-brand {
        font-size: 1.75rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
    }

    .navbar-brand > img {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
    }
    nav {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        position: fixed;
        top: 0;
        z-index: 100000;
    }
  



      



</style>
