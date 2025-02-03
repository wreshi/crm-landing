export default async function sitemap() {
    return [
        {
            url: 'https://ascendifyr.in',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://app.ascendifyr.in',
            lastModified: new Date(),
            priority: 0.9,
        }
    ]
}
