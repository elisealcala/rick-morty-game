import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://rickandmortyapi.com/graphql',
	documents: 'src/**/*.graphql',
	generates: {
		'./generated/schema.graphql': {
			plugins: ['schema-ast'],
		},
		'./generated/index.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
		},
	},
};

export default config;
