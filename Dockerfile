# Usa uma versão oficial do Node (Alpine)
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as bibliotecas (exceto as de dev)
RUN npm install --omit=dev

# Copia o resto do seu código para dentro do container
COPY . .

# Expõe a porta que a nossa API usa
EXPOSE 3000

# O comando que o container vai rodar quando ligar
CMD ["npm", "start"]