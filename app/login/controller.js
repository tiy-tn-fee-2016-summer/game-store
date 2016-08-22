import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login(user) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator,
        { identification: user.userName, password: user.password });
    },
  },
});