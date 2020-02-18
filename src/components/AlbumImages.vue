<template>
 <v-row>
    <v-col
      v-for="(album, key) in albums"
      :key="key"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-lazy
        min-height="300"
        transition="fade-transition"
      >
        <v-card :elevation="1">
          <v-img
            class="white--text align-end align-right"
            :src="album[0].url"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="black"
                />
              </v-row>
            </template>
            <v-card-title class="font-wight-regular">
              Album {{ key }}
            </v-card-title>
          </v-img>
          <v-card-subtitle
            class="grey--text"
          >
            {{ album.length }} images
          </v-card-subtitle>
          <v-card-actions>
            <!-- <v-spacer/> -->
            <v-btn
              @click="$emit('showAlbum', key)"
              outlined
            >
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-lazy>
    </v-col>
 </v-row>
</template>
<script>
export default {
  name: 'album-images',
  props: {
    albums: {
      type: Object,
      default: []
    }
  }
}
</script>