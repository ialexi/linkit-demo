/**
 * The base Gender view.
 * @class LinkItDemo.PetView
 * @extends SC.View
 * @author Evin Grano
 *
 * @version 0.1
 * @since 0.1
 */
sc_require('core');

LinkItDemo.Gender = {
  
  renderMixin: function(context, firstTime){
    var c = this.get('content');
    if(c){
      var isMale = c.get('isMale');
      context = context.setClass({'male': isMale, 'female': !isMale});
    }
  }
};
