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
   const breed = await Breed.findOne({ name: req.params.name });
   if (breed === null) {
      res.status(200).json({ status: 'success', message: 'No breed found' });
   } else {
      const { _id } = breed;

      //increament the search_count on breed document
      const updatedBreed = await Breed.findOneAndUpdate(
         { _id },
         {
            $inc: { search_count: 1 },
         }
      );

      res.status(202).json({
         status: 'success',
         message: 'successfully fetched your searched breed',
         breed: updatedBreed,
      });
   }
});

module.exports = { getAllBreeds, searchBreeds };
