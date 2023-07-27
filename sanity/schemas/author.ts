export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'displayName',
            title: 'Display Name',
            type: 'string'
        },
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string'
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}