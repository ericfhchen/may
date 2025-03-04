# Custom Shopify Theme

A clean, minimal Shopify theme built with pure CSS (no SCSS) and minimal dependencies.

## Theme Structure

```
├── assets
│   ├── theme.css
│   └── theme.js
├── config
│   ├── settings_data.json
│   └── settings_schema.json
├── layout
│   └── theme.liquid
├── locales
│   └── en.default.json
├── sections
│   ├── cart-template.liquid
│   ├── collection-template.liquid
│   ├── footer.liquid
│   ├── header.liquid
│   └── product-template.liquid
├── snippets
│   └── pagination.liquid
└── templates
    ├── cart.liquid
    ├── collection.liquid
    ├── index.liquid
    └── product.liquid
```

## Development

### Local Development

To develop this theme locally, you'll need to use Shopify CLI. Follow these steps:

1. Install [Shopify CLI](https://shopify.dev/themes/tools/cli)
2. Login to your Shopify store: `shopify login`
3. Connect to your theme: `shopify theme dev --store=your-store.myshopify.com`

### Customizing the Theme

The theme is built to be easily customizable through the Shopify Theme Editor. Most common settings can be adjusted without editing code.

#### CSS Customization

All styles are in `assets/theme.css` using pure CSS with CSS variables for easy customization.

#### JavaScript Customization

The theme uses minimal JavaScript, located in `assets/theme.js`.

#### Sections and Blocks

The theme uses Shopify's sections and blocks architecture, allowing for easy customization through the Theme Editor.

## Deployment

To deploy this theme to your Shopify store:

1. Zip the theme folder
2. Go to your Shopify admin > Online Store > Themes
3. Click "Upload theme" and select the zip file
4. Preview and publish when ready

## API Integration

To connect this theme with your Shopify API:

1. Create a private app in your Shopify admin
2. Set the necessary permissions
3. Use the API key and password in your integration

## Support

For support with this theme, please contact the theme developer.

## License

This theme is licensed for use on a single Shopify store only. 