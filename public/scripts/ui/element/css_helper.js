export function SetFlexContainerCss(element){
	element.style.display = 'Flex';
}

export function SetGridContainerCss(element){
	element.style.display = 'Grid';
}

export function GenerateSimilarRows(element, rowCount, template = '1fr'){
	element.style.gridTemplateRows = GenerateSimilarMeasures(template, rowCount);
}

export function GenerateSimilarColumns(element, columnCount, template = '1fr'){
	element.style.gridTemplateColumns = GenerateSimilarMeasures(template, columnCount);
}

function GenerateSimilarMeasures(template, number){
	return Array(number).fill(template).join(' ');
}