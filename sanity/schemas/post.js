export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'Introduction',
      title: 'Introduction',
      type: 'blockContent',
    },
    {
      name: 'Image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'timesClciked',
      title: 'Times Clicked',
      type: 'number',
      readOnly: true,
    },
  
  ],
  initialValue: {
    timesClciked: 0

  }
}
