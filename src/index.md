---
layout: "layouts/base.njk"
title: "Empresas que apoiam Bolsonaro"
---

Empresas que apoiam Jair Bolsonaro diretamente ou através de seus acionistas majoritários. A maioria é associada ao [Instituto Brasil 200](https://www.brasil200.com.br/).

Essa é uma lista de código aberto [que você pode contribuir também, aqui](https://github.com/vhfmag/empresas-que-apoiam-bolsonaro). Baseado em [um projeto similar](https://github.com/hankchizljaw/companies-that-work-with-ice).

Boicotem à vontade.

## As empresas

{% for company in companies %}
{% if company.fonte %}

- {{ company.empresa }} ([fonte]({{company.fonte}}))

{% endif %}
{% endfor %}
