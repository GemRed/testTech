const LIST_IMG = "https://jsonplaceholder.typicode.com/photos"
export default {
  methods: {
    loadImages () {
      this.axios.get(LIST_IMG)
      .then((response) => {
        if (response.status === 200) {
          this.all_images = response.data
          this.getImagesByAlbum()
          this.showFeedbak('dark', 'Success get images')
        } else {
          this.showFeedbak('error', 'An error occurred while loading the images')
        }
      })
      .catch((error) => {
        this.showFeedbak('error', 'An error occurred while loading the images')
      })
    },
    getImagesByAlbum() {
      const self = this
      this.albums = this._.groupBy(self.all_images, 'albumId')
    },
    showAlbum(key) {
      this.select_images = this.albums[key]
      this.album_id = key
    },
    showAlbums() {
      this.album_id = null
      this.getImagesByAlbum()
      this.select_images = null
      this.section = 'albums'
    },
    showAll() {
      this.select_images = this.all_images
      this.section = 'all'
    },
    viewImage(url) {
      this.image.show = false
      this.image.url = url
      this.image.show = true
    },
    deleteImage(id) {
      const self = this
      for (let i = 0; i < self.all_images.length; i++) {
        if (self.all_images[i].id === id) {
          self.all_images.splice(i, 1)
          break
        }
      }
      if (this.album_id) {
        for (let i = 0; i < self.select_images.length; i++) {
          if (self.select_images[i].id === id) {
            self.select_images.splice(i, 1)
            break
          }
        }
      }
      this.showFeedbak('', 'Image delete successfully')
    }
  }
}