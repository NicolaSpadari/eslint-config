# @spada/eslint-config

> Inspired by @antfu/eslint-config

### About

Lint and format `.js`, `.ts`, `.vue` files

<br>

### Install

```bash
npm i -D eslint @spada/eslint-config
```

<br>

### `.eslintrc` file

```json
{
  "extends": "@spada/eslint-config"
}
```

<br>

### `.vscode/.settings.json` file

```json
{
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
