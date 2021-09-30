//dependencies
const axios = require('axios').default;
//internal imports
const Breed = require('./../models/Breed');
const catchAsync = require('../utils/catchAsync');

const migrateBreeds = catchAsync(async (req, res, next) => {
   const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
         'x-api-key': process.env.CAT_API_KEY,
      },
   });
   const { data } = response;
   data.forEach(async (breed) => {
      const newBreed = new Breed({ ...breed });
      await newBreed.save();
   });
   res.status(200).json({ status: 'success', message: 'All breeds migrated successfully' });
});

const getAllBreeds = catchAsync(async (req, res, next) => {
   const breeds = await Breed.find({});
   res.status(200).json({
      status: 'success',
      message: 'Successfully fetched all breeds',
      data: { results: breeds.length, breeds },
   });
});

const searchBreeds = catchAsync(async (req, res, next) => {
   //query for breed and update the search count as well
   const breed = await Breed.findOneAndUpdate(
      { slug: req.params.name },
      {
         $inc: { search_count: 1 },
      }
   );
   if (breed === null) {
      res.status(200).json({ status: 'success', message: 'No breed found' });
   } else {
      const breedInfos = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}&limit=8`, {
         headers: {
            'x-api-key': process.env.CAT_API_KEY,
         },
      });

      const images = breedInfos.data.map((infos) => {
         const { breeds, ...image } = infos;
         return image;
      });

      res.status(202).json({
         status: 'success',
         message: 'successfully fetched your searched breed',
         data: {
            breed,
            images,
         },
      });
   }
});

const topTenBreeds = catchAsync(async (req, res, next) => {
   const breeds = await Breed.find({}).sort({ search_count: -1 }).limit(10);
   res.status(202).json({
      status: 'success',
      message: 'successfully fetched top ten breed',
      results: breeds.length,
      breeds,
   });
});

module.exports = { getAllBreeds, searchBreeds, topTenBreeds };
