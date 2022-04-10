## About debugging in VSCode

Press `F5` and set **Chrome Preview** option. .vscode folder will be created.

Go to launch.json file and set it up according to your folders locations. In my case I have several angular projects inside the same repository.

my **launch.json** file looks like this:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:4201",
      "webRoot": "${workspaceFolder}/01-bases"
    }
  ]
}
```
**url** sets the debugger port and **webRoot** is used to set up your angular project root folder.

Then just add your breakpoit in your **ts/js** files.

---

### Deployed examples:
[angular-bases](http://janioisacura.com/bases-angular/)

### 😎 Happy coding