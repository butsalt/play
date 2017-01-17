fis.hook('commonjs');

fis.match('/lib/**.js', {
    release: '/static/$0'
});

fis.match('/comp/**.js', {
    isMod: true,
    release: '/static/$0'
});

fis.match('/lib/jquery/2.1.3/jquery.js', {
    id: 'jquery',
    isMod: true
});

fis.match(
    '::package',
    {
        postpackager: fis.plugin(
            'loader',
            {
                resourceType: 'commonJs',
                useInlineMap: true
            }
        )
    }
);