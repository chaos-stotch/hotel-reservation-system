# Domínio

Este documento descreve o **domínio do sistema**, suas entidades principais, atributos e regras de negócio.

---

## Entidades

### Quarto

**Atributos**

1. Número
2. Tipo
3. Capacidade

**Regras**

1. O número do quarto deve ser único
2. A capacidade deve ser maior que 0

---

### Reserva

**Atributos**

1. Estado (ativa, cancelada, concluída)
2. Data de início
3. Data de fim

**Regras**

1. A data de início deve ser anterior à data de fim

**Relações**

1. Quarto
2. Hóspede

---

### Hóspede

**Atributos**

1. Nome
2. Documento
3. Contato

**Relações**

1. Reserva

---

## Regras Gerais

1. Um quarto não pode ter reservas sobrepostas