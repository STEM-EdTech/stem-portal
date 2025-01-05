import '~/env'; /* Import env here to validate during build */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: {
            sourceMap: true,
            autoLabel: 'always' as const,
            labelFormat: '[local]'
        }
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default withNextIntl(nextConfig);