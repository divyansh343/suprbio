import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'Please provide a unique username.'],
    required: [true, 'Please provide a username.'],
    maxlength: [20, 'username cannot be more than 20 characters'],
  },

  verified: {
    type: Boolean,
    default: false
  },

  bio: {
    type: String,
    maxlength: [160, 'bio cannot be more than 160 characters'],
  },

  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minlength: [6, 'password should be more than 6 characters.']
  },

  name: {
    type: String,
    maxlength: [25, 'Please provide a password.'],
    default: null
    // required: [true, 'Please specify the name'],
  },

  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String
    }
  },

  links_text: {
    type: String,
    default: "links"
  },
  links: [{
    id:{
      type: Number
    },
    title: {
      type: String,
      // required: true
    },
    url: {
      type: String,
      // required: true
    },
  }],

  video_text: {
    type: String,
    default: "videos"
  },

  videos: [{
    video_title: {
      type: String,
    },
    video_url: {
      type: String,
    },
    video_thumbnail: {
      type: String,
    }
  }],

  gallery_text: {
    type: String,
    default: "gallery"
  },

  gallery: [{
    img_title: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: [true, "image required"]
    }
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
    instagram: {
      type: String
    },
    linkdin: {
      type: String
    },
    youtube: {
      type: String
    },
    medium: {
      type: String
    },
    dev: {
      type: String
    },
  },

  role: {
    type: String,
    default: 'user'
  },
  createdAT: {
    type: Date,
    default: Date.now
  },

  theme: {
    type: String,
    enum: ['argon', 'mono', 'uno'],
    // default: "argon"
    // required: [true, 'Please specify the theme']
  },
})
userSchema.plugin(mongooseUniqueValidator);
export default mongoose.models.User || mongoose.model('User', userSchema)