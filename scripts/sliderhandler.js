(function(window){
    var SLIDER_LEVEL = '[data-coffee-order="slider level"]';
    var App = window.App||{};

    function SliderHandler(){
        var slider = document.getElementById('strengthLevel');
        var sliderLevel = document.querySelector(SLIDER_LEVEL);
        //
        slider.addEventListener("change",(event)=>{
            console.log('slider changed');
            sliderLevel.innerText = slider.value;
            if(slider.value>50){
                sliderLevel.style.color="red";
            }else{
                sliderLevel.style.color="green";
            }
        });
        
    }

    App.SliderHandler = SliderHandler;
    window.App=App;
})(window);