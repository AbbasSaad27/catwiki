//dependencies
const mongoose = require('mongoose');
const slugify = require('slugify').default;

const breedsSchema = mongoose.Schema({
   weight: { imperial: String, metric: String },
   id: String,
   name: String,
   slug: String,
   cfa_url: String,
   vetstreet_url: String,
   vcahospitals_url: String,
   temperament: String,
   origin: String,
   country_codes: String,
   country_code: String,
   description: String,
   life_span: String,
   indoor: Number,
   lap: Number,
   alt_names: String,
   affection_level: Number,
   adaptability: Number,
   child_friendly: Number,
   dog_friendly: Number,
   energy_level: Number,
   grooming: Number,
   health_issues: Number,
   intelligence: Number,
   shedding_level: Number,
   social_needs: Number,
   stranger_friendly: Number,
   vocalisation: Number,
   experimental: Number,
   hairless: Number,
   natural: Number,
   rare: Number,
   rex: Number,
   suppressed_tail: Number,
   short_legs: Number,
   wikipedia_url: String,
   hypoallergenic: Number,
   reference_image_id: String,
   search_count: { type: Number, default: 0 },
   image: {
      id: String,
      width: Number,
      height: Number,
      url: String,
   },
});

breedsSchema.pre('save', function (next) {
   this.slug = slugify(this.name, { lower: true });
   next();
});

const Breed = mongoose.model('Breed', breedsSchema);

module.exports = Breed;
