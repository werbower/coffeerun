(function(window){
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    //var SERVER_URL = 'http://coffeerun.herokuapp.com/api/coffeeorders';


    var App = window.App;
    var Truck = App.Truck;
    var Order = App.Order;
    //
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;

    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var Validation = App.Validation;
    //
    var remoteDS = new RemoteDataStore(SERVER_URL);

    //var myTruck = new Truck('ncc-1701',new DataStore());
    var myTruck = new Truck('ncc-1701',remoteDS);
    window.myTruck = myTruck;

    

    var formHandler = new FormHandler(FORM_SELECTOR);
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    formHandler.addSubmitHandler(function(data){
        return myTruck.createOrder.call(myTruck,data)
        .then(function(){
            checkList.addRow.call(checkList,data);
        },function(){alert('error, try again later.')});

    });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    //
    console.log(formHandler);
    var sliderHandler = new App.SliderHandler();

    
})(window);