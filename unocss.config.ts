import {
  defineConfig,
  presetAttributify,
  presetIcons,
  // presetUno,
  // presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    // presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  rules: [
    [/^bg-color-(.+)$/, ([, d]) => ({ 'background-color': `#${d}` })],
    [/^text-color-(.+)$/, ([, d]) => ({ color: `#${d}` })],
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
