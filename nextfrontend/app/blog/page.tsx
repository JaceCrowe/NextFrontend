// This would be the all blog page;
// The ones listed are the ones to be cached at to expect
// If it's not listed, then those will always be dynamically rendered

export async function generateStaticParams() {
    return [
        { slug: 'learn-to-code' },
        { slug: 'angular-vs-react' }, 
    ]
}