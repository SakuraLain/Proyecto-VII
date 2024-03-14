$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nombre del Presupuesto",
              key: "name"
          },
          {
              text: "Cantidad del Presupuesto",
              key: "age"
          },
          {
              text: "Fecha Fin del Presupuesto",
              key: "pais"
          },        
        ],
 
        //carga de datos
        data: [{
              name: 'Presupuesto 1',
              age: 1000,
              gender: 'M',
              pais: '30 Noviembre'    
          },
          {
            name: 'Presupuesto 2',
            age: 5000,
            gender: 'M',
            pais: '1 Diciembre' 
          },
          {
            name: 'Presupuesto 3',
            age: 3500,
            gender: 'M',
            pais: '24 Diciembre' 
          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    