import React from "react";
import sobreContent from '../content/sobre.json'

export default function Sobre() {

	const textContent = sobreContent.map(paragraph =>
		<p className="sobre-txt pt">{paragraph}</p>
	)

    return (
    <div class="grid-interna column-gap">
		<h2 class="sobre-txt titulo">sobre mim</h2>
		<img id="foto-minha" src="assets/sobre/thiagoquadros2.jpg"/>
		{textContent}
	</div>
    )
}