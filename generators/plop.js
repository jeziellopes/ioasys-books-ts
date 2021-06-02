module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'type',
        choices: ['contexts', 'form', 'structure'],
        message: 'What is the component type?',
      },
      {
        type: 'input',
        name: 'contextName',
        message: 'What is the name of the context?',
        when({ type }) {
          return type === 'contexts';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Page generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Page?',
      },
      {
        type: 'confirm',
        name: 'hasContext',
        message: 'Has context?',
      },
      {
        type: 'input',
        name: 'contextName',
        message: 'Context name?',
        when({ hasContext }) {
          return hasContext;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/pages/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/page.tsx.hbs',
      },
    ],
  });
};
