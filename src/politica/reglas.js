const reglas=[
    {
        regla:"Longitud mínima de dicho password debe ser de **8** caracteres.",
        fn:(password)=>{
            return password.length>=8;
        },
    },
    {
        regla:"La longitud máxima de dicho password debe ser de **12** caracteres.",
        fn:(password)=>{
            return password.length<=12;
        },
    },
    {
        regla:"No puede contener espacios en blanco.",
        fn:(password)=>{
            return !password.includes(" ");
        },
    },
    {
        regla:"Debe contener al menos uno de los siguiente caracteres !#$%&=",
        fn:(password)=>{
            const caracteresEspeciales=["!","#","$","%","&","="];
            return caracteresEspeciales.some((caracter)=>password.includes(caracter));
        },
    },
    {
        regla:"Debe contener al menos un dígito número.",
        fn:(password)=>{
            const numeros=['0','1','2','3','4','5','6','7','8','9'];
            return numeros.some((numero)=>password.includes(numero));
        },
    },
    {
        regla:"El último caracter **no** puede ser ninguno de los definidos en la regla 4",
        fn:(str)=>{
            const caracteres=['!','#','$','%','&','='];
            const ultimoCaracter=str[str.length-1];
            return !caracteres.includes(ultimoCaracter);
        },
    },
];


module.exports= reglas;