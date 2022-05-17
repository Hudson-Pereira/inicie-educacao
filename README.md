API criada por Hudson Oliveira, desenvolvedor JavaScript júnior.

Foram utilizadas nessa API as seguintes ferramentas:

  - NestJs
  - Node-fetch
  - ThunderClient
  - TypeScript
  - Docker

 API em container.

Essa API foi criada com intuito de consumir a API que se encontra no link: 
  - https://gorest.co.in/

Requisitos:  
 - Criar um novo usuário dentro do sistema:
  - Foi criada a rota user, com método POST, onde serão inseridos os dados NAME, EMAIL, GENDER, STATUS. Ao criar um usuário novo, os dados inseridos serão retornados juntamente com o ID cadastrado automaticamente para uso posterior.

 - Listar todos os usuários da API e encontrar o usuário criado através do ID do mesmo:
  - Foi criada a rota user, com o método GET, onde serão listados aproximadamente 20 usuários cadastrados,
    sendo listados do mais recente para o mais antigo, provavelmente, no momento do teste desta API, o usuário criado aparecerá no topo da lista, caso nenhuma outra pessoa esteja utilizando a api consumida ao mesmo tempo. 
  - Foi criada a rota user/<id>, com o método GET, onde será listado apenas o usuário cadastrado sob o ID  declarado na rota.  Essa rota retorna qualquer usuário cadastrado na lista pública, não sendo exclusivamente para o cadastrado no momento do teste.

 - Criar um novo post para o usuário criado:
  - Foi criada a rota post, com o método POST, onde serão inseridos os dados USER_ID, TITLE, BODY. O campo USER_ID já está com validação nativa da api consumida para criar apenas com usuários cadastrados na lista pública, sendo impossível cadastrar um novo post se o usuário ainda não estiver cadastrado. Ao finalizar o cadastro, os dados inseridos serão retornados juntamente com o ID cadastrado automaticamente para uso posterior.

 - Criar um novo comentário dentro do post criado:
  - Foi criada a rota comment, com o método POST, onde serão inseridos os dados POST_ID, NAME, EMAIL e BODY. O campo POST_ID já está com validação nativa da api consumida para criar apenas com posts cadastrados na lista pública, sendo impossível cadastrar um novo comentário se o post ainda não estiver cadastrado. Para cadastrar o comentário no post criado nessa API, deve-se inserir o número do ID retornado ao cadastrar um novo post no campo POST_ID. Poderia ser feito automáricamente, salvando o ID do post cadastrado em uma variável e utilizando esse valor, mas preferi utilizar a forma manual, para maior liberdade do usuário. Ao finalizar o cadastro, os dados inseridos serão retornados juntamente com o ID cadastrado automaticamente para uso posterior.

 - Criar um novo comentário dentro do primeiro post da lista pública de posts:
  - O uso se dá da mesma maneira do item anterior, sendo necessário inserir o ID manualmente. Poderia ser feito automáticamente, da mesma maneira explicada acima, mas, surgiu uma dúvida se o primeiro post da lista seria o que retorna no topo da busca geral, ou seja, o mais atual, ou o mais antigo da lista, o último retornado. Por isso foi decidido usar o cadastro do id manualmente.

 - Apagar o comentário criado no requisito acima:
  - Foi criada a rota comment/<id>, com o método DELETE. Nesta rota, será excluído o comentário cadastrado sob o ID inserido. Pode ser utilizado tanto para o comentário cadastrado no item anterior, como qualquer outro comentário. Poderia ser feito automáticamente, salvando o ID do comentário cadastrado em uma variável e utilizando esse valor para fazer a exclusão, mas para maior liberdade, foi optado por fazer dessa forma.

 - Disponibilizar o projeto em um repositório do Git com as instruções para que a equipe de avaliação consiga executar:
  - https://github.com/Hudson-Pereira/inicie-educacao

 - Features extras:
  - Foi criada a rota comment, com o método GET, afim de se buscar todos os comentários cadastrados na lista pública.
  - Foi criada a rota comment/<id>, com o método GET, afim de se buscar o comentário cadastrado sob o ID inserido.
