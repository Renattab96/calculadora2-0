const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete = document.getElementsByName('data-delete')[0];
    var result = document.getElementById('result');

    var operaActual = '';
    var operaAnterior = '';
    var operacion = undefined;

        botonNumeros.forEach(function (boton) {
            boton.addEventListener('click', function () {
                agregarNumero(boton.innerText);
            })
        });

        botonOpera.forEach(function(boton){
            boton.addEventListener('click',function(){
                selectOperacion(boton.innerText);
            })
        });

        botonigual.addEventListener('click',function(){
            calcular();
            actualizarDisplay();
        });

        botondelete.addEventListener('click',function(){
            clear();
            actualizarDisplay();
        });
                function selectOperacion(op){
                    if (operaActual === '')return;
                    if (operaAnterior !== ''){
                        calcular()
                    }
                    operacion= op.toString();
                    operaAnterior=operaActual;
                    operaActual='';
                }
                        function calcular(){
                            var calculo;
                            const anterior= parseFloat(operaAnterior);
                            const actual = parseFloat(operaActual); 
                            if (isNaN(anterior) ||isNaN(actual))return;
                                    switch(operacion){
                                        case '+':
                                        calculo = anterior+ actual;
                                        break; 
                                        case '-':
                                        calculo = anterior - actual;
                                        break; 
                                        case 'x':
                                        calculo = anterior *  actual;
                                        break; 
                                        case '/':
                                        calculo = anterior/ actual;
                                        break; 
                                        default:
                                            return;
                                    }
                                operaActual= calculo;
                                operacion= undefined;
                                operaAnterior='';                           
                        }

                function agregarNumero(num){
                    operaActual=operaActual.toString()+num.toString();
                    actualizarDisplay();
                }
                function clear(){
                    operaActual='';
                    operaAnterior='';
                    operacion =undefined;
                }

                function actualizarDisplay (){
                    result.value = operaActual;
                }

                clear();