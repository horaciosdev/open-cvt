import { validate } from "../src/index";
import * as fs from "fs";
import * as path from "path";

describe("Validador de Currículos CVT", () => {
  it("deve validar um currículo válido sem erros", () => {
    const cvtContent = fs.readFileSync(
      path.join(__dirname, "fixtures", "valid-resume.cvt"),
      "utf-8"
    );
    const errors = validate(cvtContent);
    // Verificamos se errors não é null antes de fazer a comparação
    expect(errors).not.toBeNull();
    if (errors) {
      expect(errors).toEqual([]);
    }
  });

  it("deve retornar erros para um currículo inválido", () => {
    const cvtContent = fs.readFileSync(
      path.join(__dirname, "fixtures", "invalid-resume.cvt"),
      "utf-8"
    );
    const errors = validate(cvtContent);

    // Verificação explícita para null
    expect(errors).not.toBeNull();

    // Após garantir que não é null, podemos seguramente verificar o array
    if (errors) {
      expect(errors.length).toBeGreaterThan(0);

      // Verificando o formato específico dos erros
      errors.forEach((error) => {
        // Verifica se o erro segue o padrão "caminho: mensagem de erro"
        expect(error).toMatch(/^(root|\w+(\.\w+)*): .+$/);
      });
    }
  });

  // Adicionando um teste para o formato alternativo key=value
  it("deve processar formato alternativo key=value", () => {
    const cvtContent = `
      name=John Doe
      email=john@example.com
      phone=1234567890
    `;
    const errors = validate(cvtContent);

    // O resultado pode ser válido ou não dependendo do schema,
    // mas não deve ser null, pois o parsing deve funcionar
    expect(errors).not.toBeNull();
  });
});
