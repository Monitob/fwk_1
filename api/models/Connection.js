/**
* Connection.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  
    tableName: "users",

     email : {
	  	type: 'email',
      require: true,
      unique: true
		
  	},

  	password : {
	  	type: 'string',
      require: true,
      minLength: 3,
      maxLength: 15,

	  },

    password_confirmation: {
      type: 'string',
    },

	  language: {
	  	type: 'string',
	  	enum: ['es', 'en', 'fr'],
	  	defaultsTo: 'en',
      len: 2
	  },

    toJSON: function() {
      var obj = this.Object();
      delete password;
      delete password_confirmation;
      return obj;
    },

    beforeCreate: function (values, next){
      if (!values.password || values.password != password_confirmation){
        return next({err: ["Password doesn't match."]});
      }
      bcrypt.hash(values.password, 10, function passwordEncryp(err, encryptedPassword){
        if (err) return next(err);
        values.encryptedPassword = encryptedPassword;
        next();
      });
    },
  }
};
