(function(window){
    'use stict';
    var App = window.App||{};

    function Order(emailAddress,coffee){
        this.emailAddress=emailAddress;
        this.coffee=coffee;
    }

    function Truck(truckId,db){
        this.truckId = truckId;
        this.db = db;
    }
    Truck.prototype.createOrder = function(order){
        console.log('adding order for '+order.emailAddress);
        this.db.add(order.emailAddress,order);
    }
    Truck.prototype.deliverOrder = function(customerId){
        console.log('delivering order for '+customerId);
        this.db.remove(customerId);
    }
    Truck.prototype.printOrders = function(){
        console.log('Truck '+this.truckId+' has orders: ');
        var customerIdArray = Object.keys(this.db.getAll());
        customerIdArray.forEach((key)=>{
            console.log(this.db.get(key));
        });
    }
    App.Order = Order;
    App.Truck = Truck;
    window.App = App;
})(window);