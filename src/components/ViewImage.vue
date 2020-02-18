<template>
<v-card dark>
  <v-img
    :src="img"
    max-height="600"
  />
</v-card>
</template>
<script>
export default {
  name: 'view-image',
  props: {
    img: {
      type: String,
      defualt: ''
    }
  }
}
</script>