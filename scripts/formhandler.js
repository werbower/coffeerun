
(function (window) {
    var App = window.App || {};
    var $ = window.jQuery;
    //
    function FormHandler(selector) {
        if (!selector) {
            throw new Error('no selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('could not find selector ' + selector);
        }


    }
    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('adding submit handler for form');
        this.$formElement.on('submit', function (event) {
            event.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(element => {
                data[element.name] = element.value;
                console.log(element.name + ' is ' + element.value);
            });

            console.log(data);
            fn(data)
                .then( ()=> {
                    this.reset();
                    this.elements[0].focus();
                });

        });
    }
    FormHandler.prototype.addInputHandler = function (fn) {
        console.log('adding input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
            var emailAddress = event.target.value;
            //console.log(fn(emailAddress));
            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + ' is not an authorised email';
                event.target.setCustomValidity(message);
            }
        });
    }

    App.FormHandler = FormHandler;
    window.App = App;

})(window);