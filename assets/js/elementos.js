const elementos = (() => {

    const $sitio = document.querySelector('#sitio');
    sitio = M.Autocomplete.init($sitio, {data:{'Manantial':null,'Bani':null}});

    var $localidad = document.querySelector('#localidad');
    var localidad = M.Autocomplete.init($localidad,{data:{"Atzompa":null}});

    var $colonia = document.querySelector('#colonia');
    var colonia = M.Autocomplete.init($colonia,{data:{"Guelagetza":null}});

    var $calendario = document.querySelector('#fecha_nacimiento');
    var calendario = M.Datepicker.init($calendario,{
        autoClose:true,
        format:'yyyy-mm-dd',
        defaultDate: new Date(),
        maxDate:new Date(),
        i18n:{months:['Enero','Febrero','Marzo','Abril',
                      'Mayo','Junio','Julio','Agosto',
                      'Septimbre','Octobre','Novimbre','Decimbre'
                    ],
             monthsShort:['Ene','Feb','Mar','Abr',
                          'May','Jun','Jul','Ago',
                          'Sep','Oct','Nov','Dic'
                    ],
                weekdays:['Domingo','Lunes','Martes','Miercoles',
                          'Jueves','Viernes','Sabado'],
                weekdaysShort:['Dom','Lun','Mar','Mie',
                               'Jue','Vie','Sab'],
            weekdaysAbbrev:['D','L','M','M','J','V','S'],
            done:'Aceptar',
            cancel:'cancelar'
            
    }});

    const $estado_civil = document.querySelector('#estado_civil');
    var estado_civil = M.FormSelect.init($estado_civil,{});

    const $sexo= document.querySelector('#sexo');
    const sexo = M.FormSelect.init($sexo,{});

    var $fecha_vencimiento = document.querySelector('#fecha_vencimiento');
    var fecha_vencimiento = M.Datepicker.init($fecha_vencimiento,{
        autoClose:true,
        format:'yyyy-mm-dd',
        defaultDate: new Date(),
        minDate:new Date(),
        i18n:{months:['Enero','Febrero','Marzo','Abril',
                      'Mayo','Junio','Julio','Agosto',
                      'Septimbre','Octobre','Novimbre','Decimbre'
                    ],
             monthsShort:['Ene','Feb','Mar','Abr',
                          'May','Jun','Jul','Ago',
                          'Sep','Oct','Nov','Dic'
                    ],
                weekdays:['Domingo','Lunes','Martes','Miercoles',
                          'Jueves','Viernes','Sabado'],
                weekdaysShort:['Dom','Lun','Mar','Mie',
                               'Jue','Vie','Sab'],
            weekdaysAbbrev:['D','L','M','M','J','V','S'],
            done:'Aceptar',
            cancel:'cancelar'
            
    }});

    const $form_agremiado = document.getElementById('form_agremiado');

    return{
        sitio,
        calendario,
        estado_civil,
        fecha_vencimiento,
        $form_agremiado,
        localidad,
        colonia
    }

})();