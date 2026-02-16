Param()

$base = 'https://walterassets.net'
$pages = @("$base/", "$base/services/", "$base/solutions/", "$base/kubernetes-center/", "$base/contact/")
$regex = '(?i)(?:src|href)\s*=\s*["'']([^"'']+\.(?:png|jpe?g|svg|ico|webp|gif|pdf))["'']'
$urls = New-Object System.Collections.Generic.List[string]

foreach ($p in $pages) {
  try { $html = (Invoke-WebRequest $p -UseBasicParsing -ErrorAction Stop).Content } catch { Write-Output "FAILED_PAGE: $p"; continue }
  $matches = [regex]::Matches($html, $regex)
  foreach ($m in $matches) {
    $u = $m.Groups[1].Value
    if ($u -and $u -notmatch '^https?://') { $u = $base.TrimEnd('/') + '/' + $u.TrimStart('/') }
    if ($u -and (-not $urls.Contains($u))) { $urls.Add($u) }
  }
}

# add common icons
$common = @("$base/favicon.ico","$base/logo.svg","$base/logo.png","$base/apple-touch-icon.png")
foreach ($c in $common) { if (-not $urls.Contains($c)) { $urls.Add($c) } }

$dest = 'src/assets/originals'
New-Item -ItemType Directory -Force -Path $dest | Out-Null

foreach ($u in $urls) {
  try {
    $fn = [IO.Path]::GetFileName($u)
    Invoke-WebRequest -Uri $u -OutFile (Join-Path $dest $fn) -UseBasicParsing -ErrorAction Stop
    Write-Output "SAVED: $fn"
  } catch {
    Write-Output "FAILED: $u"
  }
}

Write-Output "TOTAL_ASSETS: $($urls.Count)"
