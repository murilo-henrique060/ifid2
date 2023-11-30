/*
  crachas.config.js

  Esse arquivo é responsável por armazenar as configurações do serviço de crachás.

  Requisito: [RF-U01] Criar Crachás

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const crachas = {
  templatePath: './src/templates/cracha.template.html',
  imagePlaceholder: 'data:image/png;base64,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', 
}

module.exports = crachas;