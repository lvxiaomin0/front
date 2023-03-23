<template>
<section >
  <!-- <b-modal v-model="isCardModalActive" :width="640" >
    <div class="card" >
      <div class="card-image">
        &nbsp;
        <figure class="image is-16by9">
          <img src="info.artImage" class="size" alt="Image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="info.map.user.userImg" alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{  }}</p>
            <p class="subtitle is-6">@{{  }}</p>
          </div>
        </div>

        <div class="content">
          <a>#{{ }}</a>
          ---- <a>#respect o(*￣3￣)o</a>
          <br />
          <small>
            {{  }}
          </small>
        </div>
      </div>
    </div>
  </b-modal> -->
  <!-- <b-modal v-model="isCardModalActive" :width="640" :auto-focus="true">
              <div class="card">
                <div class="card-image">
                  &nbsp;
                  <figure class="image is-16by9">
                    <img :src="info.artImage" class="size" alt="Image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="info.map.user.userImg" alt="Image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ index }}</p>
                      <p class="subtitle is-6">@{{ info.map.user.userBlog }}</p>
                    </div>
                  </div>

                  <div class="content">
                    <a>#{{ info.artContent }}</a>
                    ---- <a>#respect o(*￣3￣)o</a>
                    <br />
                    <small>
                      {{ info.artCreTime }}
                    </small>
                  </div>
                </div>
              </div>
            </b-modal> -->
</section>
</template>

<script>
export default {
  name: "ModalActive",

  props:['info',"isCardModalActive"],

  data() {
    return {
       idList: []
    };
  },
  mounted(){
    
    this.idList.unshift(this.info)
    
    console.log(this.idList);
    
    // console.log("isCardModalActive",this.isCardModalActive);
    // console.log("infoList",this.infoList);
    // this.infoLists = this.infoList
    // console.log("infoLists",this.infoLists);
  }
};
</script>

<style>
</style>