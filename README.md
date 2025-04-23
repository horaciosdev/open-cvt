# Open CVT

Uma biblioteca de validação para arquivos de currículo no formato CVT (Curriculum Vitae Template).

## Instalação

```bash
npm install open-cvt
```

ou

```bash
yarn add open-cvt
```

## Uso

```typescript
import { validate, Curriculum } from 'open-cvt';

// Validar conteúdo de um arquivo CVT (formato JSON)
const cvtContent = JSON.stringify({
  "meta": {
    "formatVersion": "1.0.0",
    "language": "pt"
  },
  "basics": {
    "name": "João Silva",
    "email": "joao@exemplo.com"
  }
});

// Validar o conteúdo
const errors = validate(cvtContent);

if (errors === null) {
  console.error('Erro ao fazer o parsing do arquivo CVT');
} else if (errors.length === 0) {
  console.log('Currículo válido!');
} else {
  console.log('Erros de validação encontrados:');
  errors.forEach(error => console.log(`- ${error}`));
}
```

## Formato CVT

O formato CVT é um objeto JSON estruturado com as seguintes seções principais:

### Seções Obrigatórias

- **meta**: Informações sobre o documento
  - `formatVersion`: Versão do formato CVT
  - `createdAt`: Data de criação do documento
  - `language`: Idioma do currículo

- **basics**: Informações pessoais e de contato
  - `name`: Nome completo
  - `label`: Cargo ou função
  - `summary`: Resumo profissional
  - `identifiers`: Documentos de identificação
  - `location`: Endereço
  - `profiles`: Redes sociais e perfis profissionais

### Seções Opcionais

- **work**: Experiências profissionais
- **education**: Formação acadêmica
- **certifications**: Certificações
- **skills**: Habilidades e competências
- **volunteer**: Trabalho voluntário
- **awards**: Premiações
- **publications**: Publicações
- **interests**: Interesses
- **references**: Referências

### Exemplo Completo

```json
{
  "meta": {
    "formatVersion": "1.0.0",
    "createdAt": "2024-04-15T16:41:14-03:00",
    "language": "pt"
  },
  "basics": {
    "name": "João Silva",
    "label": "Desenvolvedor de Software",
    "summary": "Profissional com experiência em desenvolvimento web...",
    "location": {
      "city": "São Paulo",
      "countryCode": "BR"
    }
  },
  "work": [
    {
      "organization": "Empresa Exemplo",
      "position": "Desenvolvedor Frontend",
      "startDate": "2022-01-01T00:00:00-03:00"
    }
  ]
}
```

## API

### `validate(cvtContent: string): string[] | null`

Valida o conteúdo de um arquivo CVT contra o esquema padrão.

- **Parâmetros**:
  - `cvtContent`: O conteúdo do arquivo CVT como string (formato JSON)
- **Retorno**:
  - Um array de mensagens de erro (vazio se for válido)
  - `null` se ocorrer um erro durante o parsing

### Tipos exportados

A biblioteca também exporta interfaces TypeScript para trabalhar com dados de currículo:

```typescript
import { Curriculum, Work, Education } from 'open-cvt';

// Usar os tipos em seu código
const meuCurriculo: Curriculum = {
  // ...
};
```

## Desenvolvimento

### Configuração

```bash
git clone https://github.com/seu-usuario/open-cvt.git
cd open-cvt
npm install
```

### Scripts

- `npm run build`: Compila o código TypeScript
- `npm test`: Executa os testes

## Licença

MIT