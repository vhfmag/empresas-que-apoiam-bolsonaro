---
layout: "layouts/base.njk"
title: "Empresas que apoiam Bolsonaro"
---

Empresas que se apoiam Jair Bolsonaro diretamente ou através de seus acionistas majoritários. A maioria é associada ao [Instituto Brasil 200](https://www.brasil200.com.br/).

Essa é uma lista de código aberto [com que você contribuir também, aqui](https://github.com/vhfmag/empresas-que-apoiam-bolsonaro). Baseado em [um projeto similar](https://github.com/hankchizljaw/companies-that-work-with-ice).

**Boicotem à vontade** e, se souberem de empresas que não estão na lista, [entrem em contato](https://twitter.com/vhfmag)!

## As empresas

{% for empresa in empresasConfirmadas %}

- [{{ empresa.nome }}]({{empresa.fonte}})

{% endfor %}

### Relatadas mas não confirmadas

Se você souber de uma fonte fidedigna que confirme o apoio, [entre em contato](https://twitter.com/vhfmag)!

{% for empresa in empresasAConfirmar %}

- [{{ empresa.nome }}]({{empresa.relatadaEm}})

{% endfor %}
