export function copyToClipboard(str: string): void {
	const el = document.createElement('textarea')
	el.value = str
	document.body.appendChild(el)
	el.select()
	el.setSelectionRange(0, 999999)
	document.execCommand('copy')
	document.body.removeChild(el)
}
