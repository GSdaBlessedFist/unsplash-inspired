const Cosmic = require('cosmicjs')
const api = Cosmic()

export default bucket = api.bucket({
  slug: process.env.NEXT_PUBLIC_COSMIC_SLUG,
  read_key: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
  write_key: process.env.NEXT_PUBLIC_COSMIC_WRITE_KEY
})

