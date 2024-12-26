// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        rules: {
            indent: ['error', 4, { SwitchCase: 1 }],
            quotes: ["error", "double"]
        }
    }
);