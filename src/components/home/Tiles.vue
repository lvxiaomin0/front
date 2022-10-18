<template>
  <div class="tile is-ancestor" id="back_image">
    <div class="tile is-parent is-4" id="item_margin">
      <article class="tile is-child box" id="opacity_item">
        <p class="subtitle title is-4">心情小贴</p>
        <!-- <div>
        
          <b-field>
            <b-tag
              v-if="isTag1Active"
              type="is-primary"
              closable
              aria-close-label="Close tag"
              @close="isTag1Active = false"
            >
              Colored closable tag label
            </b-tag>
          </b-field>
          <b-field>
            <b-tag
              v-if="isTag2Active"
              type="is-success"
              closable
              closeType="is-danger"
              aria-close-label="Close tag"
              @close="isTag2Active = false"
            >
              Colored closable tag label with colored closed icon
            </b-tag>
          </b-field>
          <b-field>
            <b-tag
              v-if="isTag3Active"
              type="is-link"
              closable
              closeType="is-link"
              aria-close-label="Close tag"
              @close="isTag3Active = false"
            >
              Colored closable tag label with colored closed icon
            </b-tag>
          </b-field>
          <b-field>
            <b-tag
              v-if="isTag5Active"
              close-type="is-danger"
              attached
              closable
              aria-close-label="Close tag"
              @close="isTag5Active = false"
            >
              Attached tag label with colored close type
            </b-tag>
          </b-field>
          <b-field>
            <b-tag
              v-if="isTag6Active"
              close-type="is-warning"
              close-icon-type="is-dark"
              attached
              closable
              close-icon="delete"
              aria-close-label="Close tag"
              @close="isTag6Active = false"
            >
              Attached tag label with custom and colored icon
            </b-tag>
          </b-field>
          
        </div> -->
          <div class="tile is-child is-8">
          <Slider></Slider>
          </div>
         
      </article>
    </div>

    <div class="tile is-parent is-4" id="item_margin">
      <section class="b-tooltips is-child box" id="opacity_item">
        <p class="subtitle title is-4">问题广场</p>
        <b-tooltip
          label="Maybe you like a little animation"
          position="is-bottom"
          :animated="false"
        >
          <b-button label="No animation" />
        </b-tooltip>

        <b-tooltip label="You prefer dark?" type="is-dark" position="is-bottom">
          <b-button label="Dark" type="is-primary" />
        </b-tooltip>

        <b-tooltip label="Or light?" type="is-light" position="is-bottom">
          <b-button label="Light" />
        </b-tooltip>

        <b-tooltip label="I'm square" position="is-bottom" square>
          <b-button label="Square" />
        </b-tooltip>

        <b-tooltip
          label="You love the light variant, dont you?"
          type="is-primary is-light"
          position="is-bottom"
        >
          <b-button label="Primary light variant" />
        </b-tooltip>
      </section>
    </div>

    <div class="tile is-parent is-4" id="item_margin">
      <article class="tile is-child box" id="opacity_item">
        <b-tabs>
          <!-- Information -->
          <b-tab-item label="日常消息" icon="home">
            <section>
              <a href="">只有分离后才能懂的事，却没有了感慨的时间。 --宝石之国</a>
            </section>

          </b-tab-item>
          <!-- Other -->
          <b-tab-item label="其它" icon="google-photos">
            <section>
              <b-field label="写下你的小愿望">
                <b-taginput
                  v-model="tags"
                  ellipsis
                  icon="label"
                  placeholder="输入你的愿望"
                  aria-close-label="Delete this tag"
                >
                </b-taginput>
              </b-field>
              <!-- <p class="content"><b>Tags:</b> {{ tags }}</p> -->
            </section>
          </b-tab-item>
          <!-- Resource -->
          <b-tab-item label="资源下载" icon="apps"> </b-tab-item>
        </b-tabs>
      </article>
    </div>
  </div>
</template>

<script>
import Slider from "../view/Slider.vue"
export default {
  components: {
      Slider
  },
  data() {
    return {
      count: 0,
      tags: [],
      isTag1Active: true,
      isTag2Active: true,
      isTag3Active: true,
      isTag4Active: true,
      isTag5Active: true,
      isTag6Active: true
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.b-tooltips {
  .b-tooltip:not(:last-child) {
    margin-right: 0.5em;
  }
  .b-tooltip {
    margin-bottom: 0.5em;
  }
}

.subtitle {
  text-align: left;
}
.button {
  text-align: center;
  margin: 0 auto;
}
.size {
  width: 64px;
  height: 64px;
}
#back_image {
  background-image: url("../../assets/banner_two.png");
  background-repeat: no-repeat;
  background-position-x: -10px;
  // background-size: contain;
}
#opacity_item {
  opacity: 0.8;
}
#item_margin {
  margin-top: 1%;
}
</style>
