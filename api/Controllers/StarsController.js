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

const getStar = async (req, res) => {
  const { id } = req.params;

  try {
    // Use `_id` for MongoDB's default ID field
    const star = await Star.findById(id); // Use `findById` for querying by `_id`
    if (star) {
      res.status(200).json({ message: 'API Successful', star });
    } else {
      res.status(404).json({ message: 'Star not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not find Record', error: error.message });
  }
};

const updateStar = async (req, res) => {
  const { id } = req.params
  const { name, celebrityName, about } = req.body

  try {
    const star = await Star.findByIdAndUpdate(id, { name, celebrityName, about }, { new: true, runValidators: true })
    if (!star)
      return res.status(400).json({ message: 'Star not found' })

    res.status(200).json({ message: 'Star updated successfully', star })

  } catch (error) {
    res.status(500).json({ message: 'Could not find Record', error: error.message });
  }
}

export { createStar, getAllStars, getStar, updateStar };
