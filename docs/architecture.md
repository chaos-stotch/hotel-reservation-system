# Arquitetura

Esse documento exemplifica o processo da criação de uma reserva, para visualização de como as camadas se comunicam entre si em todo a plataforma.

## Criação de reserva:

### Fluxo:

1. Recebe a intenção de criar(vinda da **interface**);
2. Validar se reserva infringe qualquer regra, conforme definido em [domain.md](domain.md);
3. Se a **reserva** for válida, enviar para a **infra** o pedido de salvar a **reserva**.
4. Após a **infra** salvar, retornar para a **interface** a resposta de sucesso.
5. Se a **reserva** for inválida, retornar para **interface** a resposta de erro.

### Interface:

1. Exibe informação dos **quartos** disponíveis(apenas exibe, a interface não valida quais quartos estão disponíveis).
2. Recebe do usuário, dados do(s) **hóspede(s)** e **quarto**.
3. Chama o **fluxo da Criação de Reserva** usando os dados do **ponto 2**.

### Infra:

1. Salvar dados de **hóspede**, **quarto** e **reserva**.