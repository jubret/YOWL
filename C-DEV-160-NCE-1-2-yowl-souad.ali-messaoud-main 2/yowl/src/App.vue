<template>
    <!-- <router-link to="/tweet">Tweet</router-link> | -->
    
    <!-- <router-link to="/mentions">Mentions</router-link> |
    <router-link to="/plan">Plan</router-link> |
    <router-link to="/condition">Condition</router-link> |
    <router-link to="/cookie">Cookie</router-link> | 
    <router-link to="/contact">Contact</router-link> -->

<nav>
  <ul class="nav fixed-top justify-content-center">
     <!-- <li class="nav-item-2"> -->
      <a class="nav-link-2" href="/"><img class="logo" style="margin-right: 15px" src="yowllogo.png"></a>
    <!-- </li> -->
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/account">Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/register">Register</a>
    </li>
  </ul>
</nav>
  


  <router-view />

<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/condition">Terms and conditions</a></li>
                            <li><a href="/mentions">Legal Notice</a></li>
                            <li><a href="/cookie">Gestion des cookies</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Site Map</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/account">Account</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>High Tech Digital <img src="htdlogo.png" class="logocompany"></h3>
                        
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="https://fr-fr.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a><a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter"></i></a><a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram" target="_blank"></i></a></div>
                </div>
                <p class="copyright">High Tech Digital © 2022</p>
            </div>
        </footer>
    </div>
   
  <!-- <footer class="footer" style="">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>Ceci est un footer qui est mega style</p>
        </div>
        <div class="column">
          <a class="foot-link" href="/plan">Plan</a><br>
          <a class="foot-link" href="/condition">Condition</a><br>
          <a class="foot-link" href="/mentions">Mentions Légales</a><br>
          <a class="foot-link" href="/cookie">Gestion des cookies</a><br>
          <a class="foot-link" href="/contact">Contact</a>
        </div>
      </div>
    </div>
  </footer> -->

</template>


<style>
.logocompany{
  width: 50px;
}

.footer-dark {
  color:#f0f9ff;
  background-color:#252627;
  padding-top: 15px;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
  color:#5271ff;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
  background-color: #252627;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}


footer{
  background-color: #252627;
  color: white;
}

ul{
  background-color: #252627;
}

.logo{
  display:flex;
  height: 50px;
  transition: all .2s ease-in-out;
  margin-bottom: -5px;
}

.logo:hover{
  transform: scale(1.1);
}

.nav-link{
  color: white;
  transition: all .2s ease-in-out;
  border-radius:20px;
}

.nav-link:hover{
  background-color:#5271ff;
  border-radius:20px;
  transform: scale(1.1);
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 15px;
  background-color: #252627;
  height: 70px;
  /* position: fixed;
  margin-bottom: 75px;
  width: 100%; */
}

nav a {
  font-weight: bold;
  color: white;
  margin-top: 15px;
  margin-bottom: 10px;
}

nav a:hover {
  color: #5271ff;
}

nav a.router-link-exact-active {
  color: #5271ff;
}
</style>
