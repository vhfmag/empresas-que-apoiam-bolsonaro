---
layout: "layouts/base.njk"
title: "Empresas que apoiam Bolsonaro"
---

Essa é uma lista de código aberto [com que você contribuir também, aqui](https://github.com/vhfmag/empresas-que-apoiam-bolsonaro). Baseado em [um projeto similar](https://github.com/hankchizljaw/companies-that-work-with-ice).

Boicotem à vontade.

## As empresas

{% for company in companies %}
{% if company.fonte %}

- {{ company.empresa }} ([fonte]({{company.fonte}}))

{% endif %}
{% endfor %}
