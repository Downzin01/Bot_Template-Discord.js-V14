# <div align="center">🤖・Bot Template Discord.js V14</div>

<div align="center">
    <h3>Clique na bandeira para alterar o idioma do README</h3>
    <p>Click the flag to change the README language</p>
    <a href="https://github.com/Downzin01/Bot_Template-Discord.js-V14#clique-na-bandeira-para-alterar-o-idioma-do-readme">
      <img src="https://cdn-icons-png.flaticon.com/512/206/206597.png" alt="" style="width: 10%;">
    </a>
    <a href="https://github.com/Downzin01/Bot_Template-Discord.js-V14#click-the-flag-to-change-the-readme-language">
      <img src="https://cdn-icons-png.flaticon.com/512/206/206626.png" alt="" style="width: 10%">
    </a>
</div>

# <div align="center">🧩・Requisitos</div>

<div align="center">
    <table>
        <tr>
            <td valign="top">
                <a href="https://nodejs.org/en/">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="" style="width: 90px;">
                    <p align="center">Node.js<br>v16.9.0+</p>
                </a>
            </td>
            <td valign="top">
                <a href="https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------">
                    <img src="https://discord.js.org/static/djs_logo.png" alt="" style="width: 90px">
                    <p align="center">Discord.js<br>v14.3.0+</p>
                </a>
            </td>
        </tr>
    </table>
</div>
<br/>

---

<br>

### ╔ 🧩・Recursos do projeto:
• Comandos prefixo;<br>
• Comandos Slash;<br>
• Comandos App/User;<br>
• Suporte Database sqlite;<br>
• Suporte MongoDB.
<br/>

---

<br>

### ╔ 🧩・Criando o bot e adicionando no servidor:
- `1.` Entre no [Discord Developer Portal](https://discord.com/developers/applications) e clique na opção `Applications`;<br>
- `2.` No lado superior direito clique no botão `New Application` e nomeie seu bot;<br>
- `3.` No lado esquerdo clique na opção `Bot`, logo seguida, no lado direito clique no botão `Add Bot`;<br>
- `4.` Role para baixo e ative as três intenções de `Privileged Gateaway Intents`:<br>
    ┕ (PRESENCE INTENT, SERVER MEMBERS INTENT e MESSAGE CONTENT INTENT);<br>
- `5.` No lado esquerdo clique na opção `OAuth2`, em seguida, `URL Generator`. Selecione os escopos `bot` e `application.commands`, role para baixo até <b>BOT PERMISSIONS</b>, selecione `Administrator` (para todas as permissões da guilda);<br>
- `6.` Copie o link que é gerado abaixo, abra uma nova aba do navegador, cole a URL, escolha um servidor onde ficará seu bot.
<br/>

---

<br>

### ╔ 🧩・Configurando e instalando dependências do projeto:

- `1.` Baixe o projeto ou clone com:
```bash
git clone https://github.com/Downzin01/Bot_Template-Discord.js-V14
```
- `2.` Abre a pasta do projeto;
- `3.` No terminal para instalação das dependências, execute o comando:
```bash
npm install
```
- `4.` Acesse `config/config.js` e altere todos os valores:
```js
module.exports = {
    Client: {
        Prefixo: "seu_prefixo",
        Token: "token_do_bot",
        ID: "id_do_bot"
    },
  
    Handlers: {
      MongoDB: "link_MongoDB" 
    },

    Users: {
        OWNERS: ["id_do_dono"] 
    },
};
```

Ou acesse `.env` e altere todos os valores:
```js
TOKEN=TOKEN_DO_BOT
PREFIXO=SEU_PREFIXO
ID=ID_DO_BOT
MONGODB=LINK_MONGODB
OWNERS=ID_DO_DONO
```

> ⚠️ Por favor, não compartilhar com alguém os dados apresentados acima, principalmente o TOKEN. Problemas relacionados com esses dados não se aplicarão ao dono desse projeto, e sim do próprio usuário, proteja bem seus dados para garantir a segurança do seu bot.

- `5.` Para iniciar o bot, basta ir no terminal, executar:
```bash
npm run start
```
OU 
```bash
node .
```
- `6.` Deu certo? É só aproveitar adiante. 😁
<br/>

---

<br>

<div align="center">
    <h1>Gostaria de me ajudar financeiramente? 🤗</h1>
    <p>Opcional, mas me ajudaria demais</p>
    <a href="https://livepix.gg/downzin">
      <img src="https://theme.zdassets.com/theme_assets/11461541/128f27a322fc8d02b9f762785917069613a40669.png" alt="" style="width: 80px;">
    </a>
    <a href="https://ko-fi.com/downzin">
      <img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png" alt="" style="width: 80px;">
    </a>
    <a href="https://www.buymeacoffee.com/downzin">
      <img src="https://play-lh.googleusercontent.com/aMb_Qiolzkq8OxtQZ3Af2j8Zsp-ZZcNetR9O4xSjxH94gMA5c5gpRVbpg-3f_0L7vlo" alt="" style="width: 80px;">
    </a>
</div>

<div align="center">
    <h1>Contato 💻</h1>
    <table>
        <tr>
            <td valign="top">
                <a href="https://discord.com/users/576935681167982595">
                    <img src="https://i.pinimg.com/736x/28/00/78/280078348f61757b2565c84208c52214.jpg" alt="" style="width: 90px;">
                    <p align="center">Downzin#1320</p>
                </a>
            </td>
            <td valign="top">
                <a href="https://discord.com/users/733725067451826199">
                    <img src="https://cdn.discordapp.com/avatars/733725067451826199/a9c449fd758c8eaf38b83f8d2898b295.png?size=4096&ignore=true)." alt="" style="width: 90px">
                    <p align="center">jhoOrdann#9847</p>
                </a>
            </td>
        </tr>
    </table>
</div>

<br/>

---

<br>

<div align="center">
    <h3>Click the flag to change the README language</h3>
    <p>Clique na bandeira para alterar o idioma do README</p>
    <a href="https://github.com/Downzin01/Bot_Template-Discord.js-V14#clique-na-bandeira-para-alterar-o-idioma-do-readme">
      <img src="https://cdn-icons-png.flaticon.com/512/206/206597.png" alt="" style="width: 10%;">
    </a>
    <a href="https://github.com/Downzin01/Bot_Template-Discord.js-V14#click-the-flag-to-change-the-readme-language">
      <img src="https://cdn-icons-png.flaticon.com/512/206/206626.png" alt="" style="width: 10%">
    </a>
</div>

# <div align="center">🧩・Requirements</div>

<div align="center">
    <table>
        <tr>
            <td valign="top">
                <a href="https://nodejs.org/en/">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="" style="width: 90px;">
                    <p align="center">Node.js<br>v16.9.0+</p>
                </a>
            </td>
            <td valign="top">
                <a href="https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------">
                    <img src="https://discord.js.org/static/djs_logo.png" alt="" style="width: 90px">
                    <p align="center">Discord.js<br>v14.3.0+</p>
                </a>
            </td>
        </tr>
    </table>
</div>
<br/>

---

<br>

### ╔ 🧩・Project features:
• Prefix commands;<br>
• Slash Commands;<br>
• Application/User Commands;<br>
• Database sqlite support;<br>
• MongoDB support.
<br/>

---

<br>

### ╔ 🧩・Creating the bot and adding it to the server:
- `1.` Enter the [Discord Developer Portal](https://discord.com/developers/applications) and click on the `Applications` option;<br>
- `2.` At the top right click on the `New Application` button and name your bot;<br>
- `3.` On the left side click on the `Bot` option, then on the right side click on the `Add Bot` button;<br>
- `4.` Scroll down and enable the three `Privileged Gateaway Intents`:<br>
      ┕ (PRESENCE INTENT, SERVER MEMBERSHIP INTENT, and MESSAGE CONTENT INTENT);<br>
- `5.` On the left side click on the `OAuth2` option, then `URL Generator`. Select the `bot` and `application.commands` scopes, scroll down to <b>BOT PERMISSIONS</b>, select `Administrator` (for all guild permissions);<br>
- `6.` Copy the link that is generated below, open a new browser tab, paste the URL, choose a server where your bot will live.
<br/>

---

<br>

### ╔ 🧩・Configuring and installing project dependencies:

- `1.` Download the project or clone with:
```bash
git clone https://github.com/Downzin01/Bot_Template-Discord.js-V14
```
- `2.` Opens the project folder;
- `3.` In the terminal to install the dependencies, run the command:
```bash
npm install
```
- `4.` Go to `config/config.js` and change all the values:
```js
module.exports = {
    Client: {
        Prefixo: "your_prefix",
        Token: "token_bot",
        ID: "id_bot"
    },
  
    Handlers: {
      MongoDB: "link_MongoDB" 
    },

    Users: {
        OWNERS: ["id_OWNER"] 
    },
};
```

Or go to `.env` and change all the values:
```js
TOKEN=TOKEN_BOT
PREFIXO=YOUR_PREFIX
ID=ID_BOT
MONGODB=LINK_MONGODB
OWNERS=ID_OWNER
```

> ⚠️ Please do not share the data presented above with anyone, especially the TOKEN. Problems related to this data will not apply to the owner of this project, but to the user himself, protect your data well to guarantee the security of your bot.

- `5.` To start the bot, just go to the terminal, run:
```bash
npm run start
```
OR
```bash
node .
```
- `6.` Did it work? Just enjoy it ahead. 😁
<br/>

---

<br>

<div align="center">
    <h1>Would you like to help me financially? 🤗</h1>
     <p>Optional, but it would help me a lot</p>
    <a href="https://livepix.gg/downzin">
      <img src="https://theme.zdassets.com/theme_assets/11461541/128f27a322fc8d02b9f762785917069613a40669.png" alt="" style="width: 80px;">
    </a>
    <a href="https://ko-fi.com/downzin">
      <img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png" alt="" style="width: 80px;">
    </a>
    <a href="https://www.buymeacoffee.com/downzin">
      <img src="https://play-lh.googleusercontent.com/aMb_Qiolzkq8OxtQZ3Af2j8Zsp-ZZcNetR9O4xSjxH94gMA5c5gpRVbpg-3f_0L7vlo" alt="" style="width: 80px;">
    </a>
</div>

<div align="center">
    <h1>Contact 💻</h1>
    <table>
        <tr>
            <td valign="top">
                <a href="https://discord.com/users/576935681167982595">
                    <img src="https://i.pinimg.com/736x/28/00/78/280078348f61757b2565c84208c52214.jpg" alt="" style="width: 90px;">
                    <p align="center">Downzin#1320</p>
                </a>
            </td>
            <td valign="top">
                <a href="https://discord.com/users/733725067451826199">
                    <img src="https://cdn.discordapp.com/avatars/733725067451826199/a9c449fd758c8eaf38b83f8d2898b295.png?size=4096&ignore=true)." alt="" style="width: 90px">
                    <p align="center">jhoOrdann#9847</p>
                </a>
            </td>
        </tr>
    </table>
</div>
