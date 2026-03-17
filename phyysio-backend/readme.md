## Documentação Phyysio Backend

#### 👨🏾‍💻 Em desenvolvimento...

### 🏛️ Arquitetura
O projeto é estruturado em camadas, seguindo o padrão MVC (Model-View-Controller) para garantir uma organização clara e modular do código. As principais camadas são:
- **Model**: Responsável pela definição das entidades e pela interação com o banco de dados.
- **View**: Responsável pela apresentação dos dados e pela interface com o usuário (neste caso, a API REST).
- **Controller**: Responsável por receber as requisições, processar a lógica de negócio e retornar as respostas adequadas.

### 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para construção de APIs REST.
- **Docker**: Plataforma para containerização da aplicação, facilitando a implantação e o desenvolvimento.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.

### 🚀 Como Rodar o Projeto
1. Acesse a pasta `phyysio-backend`:
```bash
cd phyysio-backend
```
2. Defina as variáveis de ambiente necessárias no arquivo `.env` (exemplo disponível em `.env.example`):
```bash
cp .env.example .env
```
3. Inicie os containers usando Docker Compose:
```bash
docker-compose up -d
```
4. A **API** estará disponível em `http://localhost:3000` por padrão caso não defina nenhum valor diferente.
