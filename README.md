# @spada/eslint-config

### Install

```bash
npm i eslint @spada/eslint-config -D
```

<br>

### `.eslintrc` file

```json
{
	"extends": ["@spada"]
	// More if needed
}
```

<br>

### `.eslintignore` file

```txt
dist
public
node_modules
```

<br>

### VSCode automatic fix on save

Add `.vscode/settings.json` with content:

```json
{
	"prettier.enable": false,
	"editor.formatOnSave": false,
	"editor.defaultFormatter": "dbaeumer.vscode-eslint",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"eslint.validate": ["javascript", "vue", "html"]
}
```
