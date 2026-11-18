# sessionStorage

## O que é?

O `sessionStorage` é um recurso do JavaScript que guarda dados no navegador no formato **chave e valor**.

Os dados ficam salvos **só enquanto a aba estiver aberta**. Se recarregar a página (F5), eles continuam. Se fechar a aba, eles são apagados.

## Comandos principais

- `sessionStorage.setItem("chave", "valor")`: salva um dado
- `sessionStorage.getItem("chave")`: recupera um dado
- `sessionStorage.removeItem("chave")`: remove um dado
- `sessionStorage.clear()`: apaga tudo

## Diferença para o localStorage

O `localStorage` guarda os dados mesmo depois de fechar o navegador. O `sessionStorage` apaga quando a aba é fechada.

## Como funciona o exemplo

1. Abra o `index.html` no navegador.
2. Digite um nome e clique em **Salvar**.
3. Clique em **Recuperar** para mostrar o nome salvo.
4. Feche a aba, abra de novo e clique em **Recuperar**: o nome não existe mais.

Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage
