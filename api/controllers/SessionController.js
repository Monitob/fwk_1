/**
 * SessionController
 *
 * @description :: Server-side logic for managing Sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// var bcrypt = require('bcrypt');
	//
	// module.exports = {
	//
	//   create: function (req, res) {
	//
	//     //Check for email and password in params sent via the form,
	//     //if none redirect the brwoser back to teh ign-in form
	//     if (!req.param('email') || !req.param('password')) {
	//       var usernamePasswordRequiredError = [
	//                                             {
	//                                               name: 'usernamePasswordRequired',
	//                                               message: 'You must enter both a username and password.'
	//                                             }
	//                                           ]
	//       req.session.flah = {
	//        err: usernamePasswordRequiredError
	//       }
	//       res.status(200);
	//       return res.badSession('Sorry, you need to tell us the Email and Password', 'session/new');
	//     }
	//     User.findOneByEmail(req.param('email'), function foundUser (err, user) {
	//       if (err) return next(err);
	//
	//       if (!user) {
	//         return res.badSession('Sorry, this user was not found', 'session/new');
	//       }
	//
	//       bcrypt.compare(req.param('password'), user.password, function(err, valid) {
	//
	//         if (err) {
	//           res.status(400);
	//           res.view('400', {message: 'Sorry, you need to tell us the ID of the FOO you want!'});
	//         }
	//
	//         if (!valid) {
	//           return res.badSession('Sorry, wrong Password', 'session/new');
	//         }
	//         //Log user in
	//         req.session.authenticated = true;
	//         req.session.User = user;
	//
	//         if (req.session.User.admin){
	//           return res.redirect('/user');
	//         }
	//         return res.redirect('/user/show/'+user.id);
	//       });
	//     });
	//   },
	//
	//   destroy: function (req, res, next) {
	//
	//     req.session.destroy();
	//
	//     res.redirect('/signup');
	//     next();
	//   },
//

  /**
   * `SessionController.logUser()`
   */
  logUser: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },

  /**
   *  `SessionController.CreateUser()`
   */
  CreateUser: function (req, res) {
    sails.log(req.param('email'))
    sails.log(req.param('password'))
    return res.json({
      todo: 'create  user account todo',
       answer: req.param('email'),
       answer2: req.param('password_confirmation')
    });
  }, 


  /**
   * `SessionController.logout()`
   */
  logout: function (req, res) {
    if (!req.param('email') || !req.param('password')){

      return res.json({
       todo: 'Please fill a valid mail and password'
      });
    }
  }
};
