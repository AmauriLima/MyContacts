# API de Contatos

Esta é uma API de contatos que permite gerenciar contatos e categorias associadas a eles.

## Rotas

### Contatos
- Listar todos os contatos: `GET /contacts`
- Obter um contato específico: `GET /contacts/:id`
- Criar um novo contato: `POST /contacts`
>  ```
>    // body
>    {
>      "name": string,
>      "email": string,
>      "phone": string,
>      "category_id": string (uuid)
>    }
>    ```
- Atualizar um contato existente: `PUT /contacts/:id`
>  ```
>    // body
>    {
>      "name"?: string,
>      "email"?: string,
>      "phone"?: string,
>      "category_id"?: string (uuid)
>    }
>    ```
- Excluir um contato: `DELETE /contacts/:id`

### Categorias
- Listar todas as categorias: `GET /categories`
- Obter uma categoria específica: `GET /categories/:id`
- Criar uma nova categoria: `POST /categories`
>  ```
>    // body
>    {
>      "name": string,
>    }
>    ```
- Atualizar uma categoria existente: `PUT /categories/:id`
>  ```
>    // body
>    {
>      "name": string,
>    }
>    ```
- Excluir uma categoria: `DELETE /categories/:id`
