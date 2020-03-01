---
layout: "layouts/base.njk"
title: "Empresas que apoiam Bolsonaro"
---

Essa é uma lista de código aberto [com que você contribuir também, aqui](https://github.com/vhfmag/empresas-que-apoiam-bolsonaro). Baseado em [um projeto similar](https://github.com/hankchizljaw/companies-that-work-with-ice).

## As empresas

{% for company in companies %}

- {{ company.empresa }} ([fonte]({{company.fonte}}))

{% endfor %}
