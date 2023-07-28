<template>
    <div class="flex flex-col mx-48 space-y-4">
        <div v-for="blog in blogs">
            <BlogCard :blog="blog" />
        </div>
    </div>
</template>
<script setup>
const query = groq`
*[_type=="article"]{
    title,
    description,
    "slug":slug.current,
    isFeatured,
    _createdAt,
    "mainImage":mainImage.asset->url ,
    author->{
        displayName,
        jobTitle,
        "image":image.asset->url
    },
    categories[]->{
        title
    }
}
`;
const blogs = ref({});
const { data, refresh } = useSanityQuery(query);
blogs.value = data._rawValue;
console.log(blogs.value);
</script>
