/**
 * SessionController
 *
 * @description :: Server-side logic for managing Sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
        res.view();
  },
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
    var userObj = {
      email: req.param('email'),
      password: req.param('password'),
      lang: req.param('language'),
    }
    Connection.create(userObj, function newUser(err, userObj){
      if (err){
        sails.log(err)
        return res.redirect('/');
      }
      return res.redirect('/home');
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
