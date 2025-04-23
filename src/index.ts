import { validateCvt } from './cvt-validator';
import schema from './schema/resume.schema.json';
import { Curriculum } from './types/cvt';

/**
 * Valida um arquivo .cvt (string) contra o schema de currículo padrão.
 *
 * @param cvtContent O conteúdo do arquivo .cvt como uma string.
 * @returns Um array de erros de validação (vazio se for válido) ou nulo em caso de erro de parsing do CVT.
 */
export function validate(cvtContent: string): string[] | null {
  try {
    // Parse do conteúdo CVT para um objeto JavaScript
    const curriculumData = parseCvt(cvtContent);
    return validateCvt(curriculumData, schema);
  } catch (error) {
    console.error("Erro ao fazer o parsing do arquivo .cvt:", error);
    return null;
  }
}

/**
 * Realiza o parsing do conteúdo .cvt para um objeto JavaScript.
 * Assume que o formato .cvt é JSON, como mostrado nos arquivos de teste.
 *
 * @param cvtContent O conteúdo do arquivo .cvt como uma string.
 * @returns Um objeto JavaScript representando os dados do currículo.
 */
function parseCvt(cvtContent: string): any {
  try {
    // Tenta fazer o parsing do conteúdo como JSON
    return JSON.parse(cvtContent);
  } catch (jsonError) {
    // Se não conseguir fazer o parsing como JSON, tenta o formato alternativo key=value
    try {
      const lines = cvtContent.trim().split('\n');
      const data: any = {};
      for (const line of lines) {
        const [key, value] = line.split('=').map(s => s.trim());
        if (key && value) {
          data[key] = value;
        }
      }
      return data;
    } catch (lineError) {
      throw new Error('Não foi possível fazer o parsing do arquivo CVT');
    }
  }
}

export { Curriculum } from './types/cvt';