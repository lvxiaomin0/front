<template>
  <div class="tile is-parent is-8">
    <article class="tile is-child box">
      <p align="right">
        <button
          type="is-info"
          class="button is-primary is-link is-outlined"
          @click="looking_small"
        >
          全部帖子
        </button>
      </p>
      <p class="subtitle title is-4">七嘴八舌</p>

      <div class="box">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <!-- <img :src="require(`@/assets/${item.user.userImg}`)" class="size" /> -->
              <!-- <img src="../../assets/user1.jpg" alt /> -->
              <img
                src="../../assets/login_background_png.png"
                class="size"
                alt=""
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ "小明同学" }}</strong>
                <br />
                {{ "低价出售工具人，有意联系" }}
              </p>
            </div>
            <!-- <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fab fa-hotjar"></i>
                    </span>
                    {{}}
                  </a>

                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-comment-dots"></i>
                    </span>
                    {{}}
                  </a>

                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-heart"></i>
                    </span>
                    {{}}
                  </a>
                </div>
              </nav> -->
          </div>
          <div class="media-right">
            <a class="navbar-item" slot="trigger" role="button">
              <button
                type="is-info"
                class="button is-primary is-link is-outlined"
                @click="looking_big"
              >
                查看详情
              </button>
            </a>
          </div>
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="../../assets/logo.png" class="size" alt="" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ "测试" }}</strong>
                <br />
                {{ "低价出售MacBookPro,有想法的联系俺" }}
              </p>
            </div>
          </div>
          <div class="media-right">
            <a class="navbar-item" slot="trigger" role="button">
              <b-button type="is-info" outlined>查看详情</b-button>
            </a>
          </div>
        </article>
      </div>
    </article>


    <!-- 视频模块  -->
    <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">视频区</p>

            <figure class="image is-16by9">
              <iframe
                class="has-ratio"
                width="640"
                height="400"
                src="https://www.youtube.com/embed/YbL-rJv3BpI"
                title="Blender 2.83 LTS - Features Showcase"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </figure>
            <div class="media-content">
              <p class="title is-4">小明同学</p>
              <p class="subtitle is-6">@Ming</p>
            </div>
            <div class="content">
              第一个视频 <a>@bulmaio</a>. <a href="#">#github</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2022-1-1">11:09 PM - 1 Jan 2022</time>
            </div>
            <button class="button is-primary" style="margin-top: 20px">
              More
            </button>
          </article>
        </div>


        <!-- 搜索模块 -->
        <div class="level-left" id="search_control">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="search" placeholder="Search" />
            </p>
            <p class="control">
              <button class="button">
                <svg
                  t="1660809961730"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="17498"
                  width="128"
                  height="128"
                >
                  <path
                    d="M160.62 595.35c16.71 39.5 40.62 74.97 71.07 105.42s65.92 54.36 105.42 71.07c40.92 17.31 84.36 26.08 129.12 26.08s88.2-8.78 129.12-26.08c27.16-11.49 52.42-26.39 75.45-44.47l114.81 114.81 56.57-56.57L727.37 670.8c18.09-23.03 32.98-48.28 44.47-75.45 17.31-40.92 26.08-84.36 26.08-129.12s-8.78-88.2-26.08-129.12c-16.71-39.5-40.62-74.97-71.07-105.42s-65.92-54.36-105.42-71.07c-40.92-17.31-84.36-26.08-129.12-26.08s-88.2 8.78-129.12 26.08c-39.5 16.71-74.97 40.62-105.42 71.07s-54.36 65.92-71.07 105.42c-17.31 40.92-26.08 84.36-26.08 129.12s8.77 88.2 26.08 129.12z m305.61-380.81c138.78 0 251.69 112.91 251.69 251.69S605.01 717.92 466.23 717.92 214.54 605.01 214.54 466.23s112.91-251.69 251.69-251.69z"
                    fill="#4EE1C1"
                    p-id="17499"
                  ></path>
                </svg>
              </button>
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>