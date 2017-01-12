// 文件的编译过程都是一次性的
// 对于后缀名为ext1的文件来说，ext1 -> ext2，不会再ext2 -> ext3
fis.match('*.ext1', {
    rExt: 'ext2'
});

fis.match('*.ext2', {
    rExt: 'ext3'
})