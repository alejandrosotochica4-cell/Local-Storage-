class Cliente{

    constructor(nombre,apellido,rol){

        this.nombre=nombre;
        this.apellido=apellido;
        this.rol=rol;

    }

    validarNombre(){

        if(this.nombre.length>3){

            return true;

        }

        return false;

    }

}