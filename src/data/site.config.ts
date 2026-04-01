interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	base: string
}

export const siteConfig: SiteConfig = {
	site: 'https://phuhung273.github.io', // Write here your website url
	author: 'Hung Tran',
	title: 'Server Restart Engineer',
	description: 'Software Engineering Blog',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Destroy, restart thing the right way',
	paginationSize: 10, // Number of posts per page
	base: '/'
}
