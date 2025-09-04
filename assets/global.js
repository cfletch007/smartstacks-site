(function () {
  if (location.hostname.startsWith('staging.')) {
    // Favicon
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/assets/favicon-staging.ico';
    document.head.appendChild(link);

    // Banner
    var bar = document.createElement('div');
    bar.textContent = 'STAGING';
    bar.style.position = 'fixed';
    bar.style.top = '0';
    bar.style.left = '0';
    bar.style.right = '0';
    bar.style.zIndex = '9999';
    bar.style.padding = '8px 12px';
    bar.style.textAlign = 'center';
    bar.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif';
    bar.style.fontWeight = '700';
    bar.style.letterSpacing = '0.06em';
    bar.style.background = 'rgba(255, 193, 7, 0.95)'; // amber
    bar.style.borderBottom = '1px solid rgba(0,0,0,.15)';
    bar.style.color = '#111';
    document.body.appendChild(bar);
    document.body.style.paddingTop = '42px';
  }
})();


