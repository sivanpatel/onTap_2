describe('OnTapController', function() {
  beforeEach(module('OnTap'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('OnTapController');
  }));

  it('initialises with no search results', function() {
    expect(ctrl.searchResult).toBeUndefined();
  });

  it('initialises with empty search bar', function() {
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('searching for a pub', function() {

    it('should initialise a search term when search button is pressed and postcode is entered', function() {
      ctrl.searchTerm = 'E1 6LT';
      ctrl.doSearch();
      expect(ctrl.searchTerm).toBeDefined;
    });

    it('should not initialise a search term when search button is pressed but no postcode is entered', function() {
      ctrl.searchTerm = null;
      ctrl.doSearch();
      expect(ctrl.searchTerm).toBeUndefined;
    });

    it('should initialise a search result list when search button is pressed and postcode is entered', function() {
      ctrl.searchTerm = 'E1 6LT';
      ctrl.doSearch();
      expect(ctrl.searchResult).toBeDefined;
    });

    it('should not initialise a search result list when search button is pressed but no postcode is entered', function() {
      ctrl.searchTerm = null;
      ctrl.doSearch();
      expect(ctrl.searchResult).toBeUndefined;
    });
  });
});
