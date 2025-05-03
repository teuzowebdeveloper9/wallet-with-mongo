# Carteira Digital (Backend)

Este repositório contém **apenas o backend** de uma aplicação de carteira digital. Pretendo criar um frontend futuramente para complementar o projeto e proporcionar uma experiência completa ao usuário.

## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MongoDB** (banco de dados não relacional)
- **JWT (JSON Web Token)** para autenticação

## Sobre as Rotas
O backend foi estruturado com rotas RESTful para facilitar a integração futura com o frontend. Entre as principais rotas, estão:
- **/register**: Cadastro de novos usuários
- **/login**: Autenticação e geração de token JWT
- **/wallet**: Operações relacionadas à carteira (criação, consulta de saldo, movimentações)
- **/transactions**: Gerenciamento de transações financeiras

Cada rota foi protegida e validada para garantir a segurança e integridade dos dados.

## Lógica de Negócio
Implementei toda a lógica de negócio pensando em segurança, escalabilidade e facilidade de manutenção. O uso de JWT garante que apenas usuários autenticados possam acessar recursos sensíveis. O MongoDB foi escolhido pela flexibilidade e facilidade de integração com Node.js.

## Desafios e Experiência
Optei por desenvolver o backend **antes do frontend**, o que foi um grande desafio, pois precisei imaginar toda a experiência do usuário e os fluxos de dados sem ter nada visual. Não foi uma experiência fácil ou que gostei muito, mas foi interessante e me fez crescer como desenvolvedor, principalmente na parte de planejamento e antecipação de problemas.

## Problemas e Aprendizados
Enfrentei diversos problemas durante o desenvolvimento. Recomendo que você leia as **issues** do repositório para entender um pouco dos desafios e soluções encontradas ao longo do caminho.

---

Feito com esforço e 💻 by teuzowebdeveloper9
