import type { GlobalConfig } from 'semantic-release'

export default {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
} satisfies Partial<GlobalConfig>
