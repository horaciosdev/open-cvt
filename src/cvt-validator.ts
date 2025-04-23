// cvt-validator.ts
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

/**
 * Valida um objeto de currículo contra um schema JSON.
 *
 * @param data O objeto de currículo a ser validado.
 * @param schema O schema JSON para validação.
 * @returns Um array de erros de validação (vazio se for válido).
 */
export function validateCvt(data: any, schema: any): string[] {
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  
  const validate = ajv.compile(schema);
  const isValid = validate(data);
  
  if (!isValid && validate.errors) {
    return validate.errors.map(err => {
      const path = err.instancePath ? err.instancePath.slice(1) : 'root';
      return `${path}: ${err.message || 'dados inválidos'}`;
    });
  }
  
  return [];
}