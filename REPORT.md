# Лаб 8. Bootstrap ба Tailwind CSS: нэг хуудас, хоёр арга

## Хэмжилтийн хүснэгт

Тоон утгуудыг доорх "Хэрхэн хэмжих" заавраар өөрөө хэмжиж бөглөнө үү. Зөвхөн "хэмжсэн" гэж тэмдэглэснийг би тоолсон.

| Үзүүлэлт | Bootstrap | Tailwind |
|---|---|---|
| HTML файлын хэмжээ (хэмжсэн) | 6 601 byte | 7 923 byte |
| CSS файлын хэмжээ (min, gzip) | ___ KB (CDN-ээс) + style.css | ___ KB (`dist/output.css`) |
| JS (framework) | bootstrap.bundle ___ KB | байхгүй (өөрийн script.js) |
| Нэг card-ын class тоо (хэмжсэн, `<article>` дотор) | 9 | 17 |
| Lighthouse: Performance | ___ | ___ |
| Lighthouse: Accessibility | ___ | ___ |
| Lighthouse: Best Practices | ___ | ___ |
| Lighthouse: SEO | ___ | ___ |

Тайлбар: Bootstrap-ийн card-ыг `col` wrapper-тай нь тоолбол +1 class нэмэгдэнэ.

## Хэрхэн хэмжих
- **CSS хэмжээ:** Tailwind: `npm run build` хийсний дараа `dist/output.css`-ийн хэмжээ. Bootstrap: Chrome DevTools → Network → bootstrap.min.css-ийн transferred size.
- **Lighthouse:** Chrome DevTools → Lighthouse → Mobile → "Analyze page load". Хоёр хуудсыг ижил нөхцөлд (Incognito, ижил горимд) хэмжинэ. Bootstrap-ийг CDN-ээс ачаалдаг тул сүлжээний нөлөө орно.

## Дүгнэлт (ноорог — тоогоо оруулаад засна уу)
Bootstrap нь бэлэн component (navbar, card, form validation)-той тул HTML-д class цөөн, хурдан эхэлдэг боловч CDN-ээс бүхэл бүтэн CSS/JS ачаалдаг. Tailwind нь HTML дээр class олон бичүүлдэг (card тутамд 17 vs 9) ч build хийхэд зөвхөн ашигласан class үлдэх тул CSS жижиг гарна. Хэмжсэн CSS хэмжээ, Lighthouse оноогоо энд оруулж, аль нь хурдтай, аль нь хөгжүүлэхэд хялбар байсныг өөрийн үр дүнгээр баталгаажуулж бичнэ үү.
