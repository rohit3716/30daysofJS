
const getValue = () => {
    console.log('Function Called');
}

const debounce = function(fn, d) {
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout( timer );
        timer = setTimeout( () => {
            getValue.apply( context, args);
        }, d)
    }
}

const debounceFunction = debounce( getValue, 300);

debounceFunction();