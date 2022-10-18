 <nav class="navbar" id="navbar_top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start ">
      <a class="navbar-item">
        首页
      </a>

      <a class="navbar-item">
        热榜
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          更多
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            关于我
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            联系俺
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            报个BUG
          </a>
        </div>
      </div>
      
    </div>
   
     <div class="level-left" id="search_control">
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="search"  placeholder="你想看点啥" />
              </p>
              <p class="control">
                
                <button class="button"><svg t="1660809961730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17498" width="128" height="128"><path d="M160.62 595.35c16.71 39.5 40.62 74.97 71.07 105.42s65.92 54.36 105.42 71.07c40.92 17.31 84.36 26.08 129.12 26.08s88.2-8.78 129.12-26.08c27.16-11.49 52.42-26.39 75.45-44.47l114.81 114.81 56.57-56.57L727.37 670.8c18.09-23.03 32.98-48.28 44.47-75.45 17.31-40.92 26.08-84.36 26.08-129.12s-8.78-88.2-26.08-129.12c-16.71-39.5-40.62-74.97-71.07-105.42s-65.92-54.36-105.42-71.07c-40.92-17.31-84.36-26.08-129.12-26.08s-88.2 8.78-129.12 26.08c-39.5 16.71-74.97 40.62-105.42 71.07s-54.36 65.92-71.07 105.42c-17.31 40.92-26.08 84.36-26.08 129.12s8.77 88.2 26.08 129.12z m305.61-380.81c138.78 0 251.69 112.91 251.69 251.69S605.01 717.92 466.23 717.92 214.54 605.01 214.54 466.23s112.91-251.69 251.69-251.69z" fill="#4EE1C1" p-id="17499"></path></svg></button>
              </p>
          
            </div>
          </div>
      </div>
  <!-- v-if="" -->
    <div class="navbar-end" v-if="!$store.state.loginStates">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" @click="register">
            <strong>注册</strong>
            
          </a>
          <button class="button is-light" @click="login">
            登录
          </button>
        </div>
      </div>
    </div>
    <!-- v-else-if="" -->
    <div v-else-if="$store.state.loginStates" class="logout_position">
       
        <div class="navbar-item">
          <figure class="media-left">
              <p class="image is-32x32">
                <img src="../../assets/login_background_png.png" class="size" alt="">
              </p>
            </figure>
          <div class="buttons">
            <b-button  type="is-primary" outlined @click="logout">登出</b-button>
          </div>
      </div>
      </div>
  </div>
    
</nav>