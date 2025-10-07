
FROM node:20-alpine AS node


RUN mkdir -p /app && chown node:node /app
WORKDIR /app

USER node

COPY --chown=node:node . .

RUN \
    # Allow mounting of these files, which have no default
    touch .env ; \
    # Create directories for the volumes to inherit the correct permissions
    npm install --no-audit 
    # React client build
    # npm run build
# Node API setup
# ENV HOST 0.0.0.0
EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
CMD ["npm", "run", "dev"]
