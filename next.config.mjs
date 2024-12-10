/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Aroma_A_Fullstack_project',
  assetPrefix: '/Aroma_A_Fullstack_project',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Aroma_A_Fullstack_project'
  }
}

export default nextConfig