import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'IgniteRecovery',

  projectId: 'nyr0cvvw',
  dataset: 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Create a sub-menu for Patient Intake
            S.listItem()
              .title('Patient Intake')
              .child(
                S.list()
                  .title('Patient Intake')
                  .items([
                    S.documentTypeListItem('intakeService').title('Services'),
                    S.documentTypeListItem('insuranceProvider').title('Insurance Providers'),
                  ])
              ),
            S.listItem()
              .title('Staff')
              .child(
                S.list()
                  .title('Staff')
                  .items([
                    S.documentTypeListItem('teamCategory').title('Team Categories'),
                    S.documentTypeListItem('teamMember').title('Team Members'),
                  ])
              ),
            S.listItem()
              .title('Careers')
              .child(
                S.list()
                  .title('Careers')
                  .items([
                    S.documentTypeListItem('openPosition').title('Open Positions'),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
