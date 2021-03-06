describe('Routes', function () {
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function () {
    var state;

    it('should have the correct URL', function () {
      state = $state.get('settings');

      expect(state.url).toEqual('/settings');
    });
    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings.html')
    });

    it('should use the right controller', function () {
      expect(state.controller).toContain('SettingsController');
    });
  });

  describe('Settings/user', function () {
    var state;

    it('should have the correct URL', function () {
      state = $state.get('settings.user');

      expect(state.url).toEqual('/user');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings/user.html')
    });

    it('should use the right controller', function () {
      expect(state.controller).toContain('UserSettingsController');
    });
  });

  describe('Settings/notifications', function () {
    var state;

    it('should have the correct URL', function () {
      state = $state.get('settings.notifications');

      expect(state.url).toEqual('/notifications');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings/notifications.html')
    });

    it('should use the right controller', function () {
      expect(state.controller).toContain('NotificationsSettingsController');
    });
  });
});