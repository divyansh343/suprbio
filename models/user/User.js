import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'Please provide a unique username.'],
    required: [true, 'Please provide a username.'],
    maxlength: [20, 'username cannot be more than 20 characters'],
  },

  bio: {
    type: String,
    maxlength: [160, 'bio cannot be more than 160 characters'],
  },

  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },

  name: {
    type: String,
    // required: [true, 'Please specify the name'],
  },

  profileImg: {
    type: String,
  },

  links: [{
    title: {
      type: String,
      // required: true
    },
    redirectTo: {
      type: String,
      // required: true
    },
  }],

  whatsApp: {
    show: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number,
      maxlength: [10, "number should not be less than 10 digits"]
    }
  },

  gallery: [{
    show: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: [true, "image required"]
    },
    description: {
      type: String,
      maxlength: [160, "description cannot be more than 160 characters"]
    }
  }],

  phone: {
    type: Number,
    maxlength: [10, "phone number should be 10 charaters."]
  },

  email: {
    type: String,
    unique: [true, "email should be unique"]
  },


  socials: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
  },

  theme: {
    type: String,
    enum: ['argon', 'mono', 'uno'],
    // required: [true, 'Please specify the theme']
  },
})
userSchema.plugin(mongooseUniqueValidator);
export default mongoose.models.User || mongoose.model('User', userSchema)