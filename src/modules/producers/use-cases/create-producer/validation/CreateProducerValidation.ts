import Joi from "joi";
import validator from "cpf-cnpj-validator";

const JoiDocument = Joi.extend(validator);

const producerSchema = Joi.object({
  producer_name: Joi.string().required(),
  person_type: Joi.string().valid("PF", "PJ").required(),
  document: Joi.when("person_type", {
    is: "PF",
    then: JoiDocument.document().cpf().length(11).required(),
    otherwise: JoiDocument.document().cnpj().length(14).required(),
  }),
});

export default producerSchema;
