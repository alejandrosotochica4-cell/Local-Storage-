class ApiModelo{

    constructor(){

        this.llave="clientes";

    }

    guardar(cliente){

        let clientes=localStorage.getItem(this.llave);

        if(clientes==null){

            clientes=[];

        }else{

            clientes=JSON.parse(clientes);

        }

        let repetido=clientes.find(function(persona){

            return persona.nombre.toLowerCase()==cliente.nombre.toLowerCase()
            &&
            persona.apellido.toLowerCase()==cliente.apellido.toLowerCase();

        });

        if(repetido){

            return false;

        }

        clientes.push(cliente);

        localStorage.setItem(this.llave,JSON.stringify(clientes));

        return true;

    }

}