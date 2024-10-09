import React from "react"
import especial_cpi from "./especial_cpi.json"
import impeachment from "./impeachment.json"
import oiticica from "./oiticica.json"
import serrapilheira from "./serrapilheira.json"

const projectList =
        [
            {
                "id": "especial_cpi",
                "name": "tudo o que você precisa saber sobre o relatório da CPI da covid",
                "company": "nexo jornal",
                "year": "2021",
                "tags": [
                    "frontend",
                    "design"
                ],
                "content": especial_cpi,
                "img": "/assets/especial-cpi/tq_especia-cpi-1.png"
            },
            {
                "id": "impeachment",
                "name": "5 anos: o saldo do impeachment de dilma para o brasil",
                "company": "nexo jornal",
                "year": "2021",
                "tags": [
                    "frontend",
                    "design"
                ],
                "content": impeachment,
                "img": "/assets/impeachment/tq_impeachment-capa1.jpg"
            },
            {
                "id": "oiticica",
                "name": "os múltiplos sentidos da arte de hélio oiticica",
                "company": "nexo jornal",
                "year": "2020",
                "tags": [
                    "frontend",
                    "design"
                ],
                "content": oiticica,
                "img": "/assets/oiticica/tq_oiticica-capa2.jpg"
            },
            {
                "id": "serrapilheira",
                "name": "cientistas do brasil que você precisa conhecer",
                "company": "nexo jornal",
                "year": "2020-2021",
                "tags": [,
                    "design",
                    "video",
                    "animação"
                ],
                "content": serrapilheira,
                "img": "/assets/serrapilheira/tq_serrapilheira-capa1.png"
            }

        ]
export default projectList