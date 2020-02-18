<template>
  <v-app id="app">
    <v-content>
      <v-app-bar
        dark
        app
      >
        <v-toolbar-title>
          <span class="font-weight-thin grey--text text--darken-2">
            User History
          </span>
        </v-toolbar-title>
        <v-spacer/>
        <v-btn
          @click="showAlbums"
          text
          :color="isButtonAcitve('albums')"
        >
          Albums
        </v-btn>
        <v-btn
          @click="showAll"
          text
          :color="isButtonAcitve('all')"
        >
          All
        </v-btn>
      </v-app-bar>
      <v-container>
        <v-breadcrumbs
          v-if="section === 'albums'"
        >
          <v-breadcrumbs-item
            @click="showAlbums"
            class="cursor-pointer"
          >
            Albums
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
            v-if="album_id"
            disabled
          >
            > &nbsp; Album {{ album_id }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
        <p
          v-else
          class="body-2 mt-4 mr-1 text-right grey--text"
        >
          {{ select_images.length }} images total
        </p>
        <album-images
          v-bind:albums.sync="albums"
          @showAlbum="showAlbum"
          v-if="section === 'albums' && !select_images"
        />
        <images
          v-if="select_images"
          v-bind:section.sync="section"
          v-bind:images.sync="select_images"
          @deleteImage="deleteImage"
          @viewImage="viewImage"
        />
        <v-dialog
          v-model="image.show"
          max-width="600"
          overlay-color="black"
          @keyup.esc="image.show = false"
        >
          <view-image v-bind:img.sync="image.url"/>
        </v-dialog>

        <v-snackbar
          bottom
          :timeout="3000"
          v-model="snackbar.show"
          :color="snackbar.type"
        >
          {{ snackbar.text }}
        </v-snackbar>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AlbumImages from './components/AlbumImages'
import Images from './components/Images'
import ViewImage from './components/ViewImage'
import images from './mixins/images'

export default {
  name: 'App',
  components: {
    AlbumImages,
    Images,
    ViewImage
  },
  mixins: [
    images
  ],
  data () {
    return {
      section: 'albums',
      all_images: {},
      albums: {},
      select_images: null,
      album_id: null,
      image: {
        show: false,
        url: ''
      },
      snackbar: {
        show: false,
        type: '',
        text: ''
      }
    }
  },
  methods: {
    isButtonAcitve(key) {
      return key === this.section ? 'white' : 'grey'
    },
    showFeedbak (type, text) {
      this.snackbar.show = false
      this.snackbar.type = type
      this.snackbar.text = text
      this.snackbar.show = true
    }
  },
  mounted() {
    this.loadImages()
  }
}
</script>

<style>
</style>
