const boom = require('@hapi/boom');
//Tiene que ser dinámico
function validatorHandler(schema, property){
  //Clousures
  return (req, res, next) =>{
    const data = req[property]; //Puede venir en body, params o query
    const { error } = schema.validate(data, { abortEarly: false }); //Paras enviar errores juntos
    if(error){
      next(boom.badRequest(error));
    }
    next(); //Si no hay error sigue el middleware
  }
}

module.exports = validatorHandler;
