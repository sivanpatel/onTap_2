describe('OnTapController', function() {
  beforeEach(module('OnTap'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('OnTapController');
  }));

  it('initialises with empty search bar and no search results', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('searching for a pub', function() {

    // it('shows a list of pubs near you when you enter your location', function() {

    //   ctrl.searchTerm = 'E1 6LT';
    //   ctrl.doSearch();
    //   expect(ctrl.searchResult).toEqual("Blessing's");
    // });
  });
});