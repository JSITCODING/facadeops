# FacadeOps

> Um registo vivo da condição exterior para gestores imobiliários em Luanda.

**Fase de validação** — A FacadeOps ainda não opera nem se apresenta como prestador licenciado, certificado ou segurado.

![Site conceptual da FacadeOps em fase de validação](site/qa/implementation-top.png)

[English](README.md) · [Explorar o registo sintético](docs/sample-inspection-report.md) · [Ler o blueprint do serviço](docs/service-blueprint.md)

A FacadeOps explora um resultado mais útil do que fotografias isoladas de edifícios: um registo estruturado e evolutivo que liga evidência visual, interpretação qualificada, incerteza e próximos passos. A primeira oferta proposta é documentação de inspeção. Limpeza, reparação e outras intervenções de campo continuam a ser possibilidades executadas por parceiros, a avaliar apenas depois de verificados os requisitos operacionais, regulamentares, de segurança e de seguro aplicáveis.

## O que está incluído

- Site conceptual responsivo que seleciona automaticamente um idioma suportado, memoriza alterações e inclui a pré-visualização funcional de um registo sintético.
- Blueprint do serviço que separa as responsabilidades do gestor, operador e revisor qualificado.
- Registo sintético de inspeção e contrato mínimo de dados.
- Guiões de pesquisa, inquérito e plano de validação de 30 dias.
- Registo de riscos e fontes datadas para afirmações públicas e operacionais.
- Modelo editável de custos e preços, com pressupostos ilustrativos claramente identificados.

## Executar o site conceptual

Requisitos: Node.js 20 ou mais recente e npm.

```bash
cd site
npm ci
npm run dev
```

Use `npm run check` para executar a compilação de produção e os testes do contrato de alojamento usados na integração contínua.

## Guia do repositório

| Área | Finalidade |
| --- | --- |
| [`site/`](site/) | Site conceptual localizado em React/Vite |
| [`docs/sample-inspection-report.md`](docs/sample-inspection-report.md) | Exemplo sintético do entregável |
| [`docs/service-blueprint.md`](docs/service-blueprint.md) | Fluxo proposto e responsabilidades |
| [`docs/data-schema.md`](docs/data-schema.md) | Contrato mínimo do registo digital |
| [`docs/validation-plan.md`](docs/validation-plan.md) | Critérios para um piloto limitado |
| [`docs/risk-register.md`](docs/risk-register.md) | Limites de segurança, privacidade e publicação |
| [`research/sources.md`](research/sources.md) | Registo de fontes datadas |
| [`artifacts/facadeops-pricing-model.xlsx`](artifacts/facadeops-pricing-model.xlsx) | Modelo editável de preços |

## Limites de afirmações e privacidade

Este repositório usa edifícios, imagens e achados sintéticos. Não contém moradas de clientes, contactos, credenciais, planos de voo ou evidência de inspeções reais. Uma fotografia não constitui, por si só, um diagnóstico, e a FacadeOps não substitui uma inspeção estrutural, de engenharia ou legalmente exigida.

Consulte [`LICENSE`](LICENSE) para os termos do código e conteúdo e [`site/public/assets/ASSETS.md`](site/public/assets/ASSETS.md) para a proveniência dos recursos visuais.
