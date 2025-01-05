## How to deploy the Streamify dashboard on GitHub Pages:

1. First, add the GitHub Pages dependency:
   
   ```   
   bun add -D gh-pages
   ```

2. Add these scripts to package.json:
   
   ```
    {
    "scripts": {
        "build": "next build",
        "export": "next export",
        "deploy": "gh-pages -d out"
     }
    }
   ```
3. Create next.config.ts with GitHub Pages settings:
   
   ```
   import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/streamify-fictional-music-analytics-dashboard',
    images: {
        unoptimized: true
        }
    };

    export default nextConfig;
   ```
4. Run the deployment commands:
   
    ```
    bun run build
    bun run deploy
    ```

5. On GitHub:
    - Go to repository Settings
    - Navigate to Pages section
    - Select 'gh-pages' branch as source
    - Save the changes


Your dashboard will be live at: `https://[your-username].github.io/streamify-fictional-music-analytics-dashboard`




## How to deploy from the GitHub dashboard:

1. Go to your repository's Settings tab
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - Choose "Next.js" from the framework presets
4. Create the suggested workflow file (.github/workflows/nextjs.yml)
5. The workflow will automatically build and deploy your site

Your dashboard will be live at: `https://[your-username].github.io/streamify-fictional-music-analytics-dashboard`

