export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'isFeatured',
            title: 'Is Featured',
            type: 'boolean',
            options: {
                layout: 'checkbox',
            }
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        }
                    ]
                }
            ]
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',

            to: [{ type: 'author' }]
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'category' }]
                }
            ]
        },
        {
            name: 'createdAt',
            title: 'Created at',
            type: 'datetime',
            hidden: true,
            options: {
                default: () => {
                    return new Date().toISOString()
                }
            }
        }
    ],
    initialValue: {
        isFeatured: false
    },
}