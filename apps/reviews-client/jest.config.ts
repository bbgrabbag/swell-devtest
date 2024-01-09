/* eslint-disable */
export default {
	displayName: 'reviews-client',
	preset: '../../jest.preset.js',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	clearMocks: true,
	transform: {
		'^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
		'^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/apps/reviews-client',
};
