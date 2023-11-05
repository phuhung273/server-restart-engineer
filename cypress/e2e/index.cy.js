import { siteConfig } from '../../src/data/site.config.ts'

it('page is visible', () => {
  const page = cy.visit(siteConfig.base);

  page.get('title').should('exist')
});