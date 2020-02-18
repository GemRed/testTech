<template>
  <v-row>
    <v-col
      v-for="(image, key) in images"
      :key="key"
      cols="6"
      sm="4"
      md="3"
      lg="2"
    >
      <v-lazy
        transition="fade-transition"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card flat tile>
            <v-img
              :src="image.thumbnailUrl"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="h-100 d-flex transition-fast-in-fast-out b-images v-card--reveal display-3 white--text pa-3 align-end"
                >
                  <v-row>
                    <v-col
                      cols="12"
                      class="mb-0 pb-0"
                    >
                      <p class="subtitle-2 text-capitalize-first block mb-0">
                        {{ image.title }}
                      </p>
                      <p
                        v-if="section !== 'albums'"
                        class="caption block mb-0"
                      >
                        Album {{ image.albumId }}
                      </p>
                    </v-col>
                    <v-col
                      cols="12"
                      class="mt-0 pt-2 pb-0 d-block text-right"
                    >
                      <v-tooltip bottom color="grey darken-4">
                        <template v-slot:activator="{ on }">
                            <v-btn
                              icon
                              v-on="on"
                              dark
                              class="mr-0"
                              @click="$emit('viewImage', image.url)"
                            >
                              <v-icon>
                                visibility
                              </v-icon>
                            </v-btn>
                        </template>
                        <span>
                          view
                        </span>
                      </v-tooltip>
                      <v-tooltip bottom color="grey darken-4">
                        <template v-slot:activator="{ on }">
                            <v-btn
                              icon
                              v-on="on"
                              dark
                              @click="$emit('deleteImage', image.id)"
                              class="ml-0"
                            >
                              <v-icon>
                                delete
                              </v-icon>
                            </v-btn>
                        </template>
                        <span>
                          delete
                        </span>
                      </v-tooltip>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-lazy>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'images',
  props: {
    images: {
      type: Array,
      default: {}
    },
    section: {
      type: String,
      default: 'albums'
    }
  }
}
</script>