import Joi from "joi";
import CustomeErrorHandler from "../../services/CustomeErrorHandler";

const registerController = {
  async register(req, res, next) {
    //validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(3).required(),
      repeat_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    //check if user in already database

    try {
      const exist = await User.exist({ email: req.body.email });
      if (exist) {
        return next(CustomeErrorHandler.alreadyExist("Already exist"));
      }
    } catch (err) {
      return next(err);
    }

    res.json({ message: "Hello" });
  },
};

export default registerController;
