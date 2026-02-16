const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')
const srcPages = path.resolve(__dirname, '..', 'src', 'pages')

if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Run build first.')
  process.exit(1)
}

// find generated css file in dist/assets
let cssFile = null
const assetsDir = path.join(distDir, 'assets')
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir)
  cssFile = files.find(f => /^index-.*\.css$/.test(f))
}
if (!cssFile) {
  console.error('Could not find generated CSS file in dist/assets')
}

const pages = fs.readdirSync(srcPages).filter(f => f.endsWith('.html'))
pages.forEach(page => {
  const src = fs.readFileSync(path.join(srcPages, page), 'utf8')
  let out = src
  // replace stylesheet link pointing to /src/styles.css with built css path
  if (cssFile) {
    out = out.replace(/<link[^>]*href=["'].*src\/styles\.css.*["'][^>]*>/i,
      `<link rel="stylesheet" href="/WalterAssets/assets/${cssFile}" crossorigin>`)
  }
  // adjust nav links from /src/pages/... to relative pages (services.html etc.)
  out = out.replace(/href=["']\/src\/pages\/(services|solutions|kubernetes-center|contact)\.html["']/g, (m, p1) => `href="${p1}.html"`)
  // ensure relative link to index
  out = out.replace(/href=["']\/["']/, 'href="index.html"')
  // write to dist root
  fs.writeFileSync(path.join(distDir, page), out, 'utf8')
  console.log('Wrote', page)
})

console.log('Pages copied to dist')
