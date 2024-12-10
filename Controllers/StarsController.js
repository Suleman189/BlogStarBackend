import Star from '../Models/star.model.js';
import { starValidationSchema } from '../Validations/starValidations.js';

const createStar = async (req, res) => {
  const { name, celebrityName, about } = req.body;
  let starObject = { name, celebrityName, about };
  const { error } = starValidationSchema.validate(starObject, {
    abortEarly: false,
  });

  if (error)
    return res
      .status(400)
      .json({
        message: 'Validation failed',
        error: error.details.map((err) => err.message),
      });

  let star = new Star(starObject);

  try {
    let _savedStar = await star.save();

    res.status(201).json({ message: 'star saved successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Unknown error occurred', error: error.message });
  }
};

const getAllStars = async (req, res) => {
  try {
    let stars = await Star.find();

    res.status(200).json({ message: 'API Successfull', stars });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Unknown error occurred', error: error.message });
  }
};

export { createStar, getAllStars };
