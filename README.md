# Rafty

Landing page for **Rafty** — rafting tours in the Lori region, Armenia.

A calm, soft static landing page with palette and typography that can be
switched via `data-` attributes.

## Structure

| Path | Purpose |
| --- | --- |
| [`index.html`](index.html) | Self-contained landing page (all CSS/JS inlined). This is what ships. |
| [`css/rafty.css`](css/rafty.css) | Modular stylesheet source. |
| [`js/rafty.js`](js/rafty.js) | Modular interactions source (nav, language toggle, reveal, form). |
| [`assets/`](assets/) | Logo images. |
| [`_config.yml`](_config.yml) | GitHub Pages / Jekyll config (theme: `jekyll-theme-cayman`). |

> `index.html` inlines its own styles and scripts, so it renders standalone
> without the modular `css/` and `js/` files. Those are kept as editable source.

## Develop

It's a static site — open `index.html` directly in a browser, or serve the
folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Hosted via **GitHub Pages**. Enable it in **Settings → Pages** (source: `main`,
root). The custom `index.html` is served as-is; the Jekyll theme applies only
to any Markdown pages added later.

## License

[MIT](LICENSE) © 2026 Grigor Hakobyan
