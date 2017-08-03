import babili from 'rollup-plugin-babili';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    format: 'umd',
    plugins: [
        commonjs({
            include: 'src/**'
        }),
        babili()
    ]
}
