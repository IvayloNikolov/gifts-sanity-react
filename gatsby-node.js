const path = require("path");

exports.createPages = async ({graphql, actions}) =>{
    const {createPage} = actions
	const pagesGraph = await graphql(`query MyQuery {
		allSanityPost {
		  nodes {
			id
			slug {
			  _key
			  _type
			  current
			}
			title
			Introduction {
			  _key
			  _type
			  style
			  _rawChildren
			  list
			}
			Image {
			  asset {
				id
				url
			  }
			}
			_rawIntroduction
		  }
		}
	  }
	  
    `);
    
    if(pagesGraph.errors){
        throw pagesGraph.errors;
    }
    let pages = pagesGraph.data.allSanityPost.nodes;
    for(page of pages){
        let resultGifts = await graphql(`
            query MyQuery {
                allSanityGift(
                    filter: {GiftPost: {id: {eq: "-7929a17a-f5d0-5eee-ba7b-3ce08f0e22a1"}}}
                ) {
                    edges {
                        node {
                            id
                            Link
                            Name
                            Price
                            Shop
                            Image{
                                asset {
									id
									url
                                }
							}
							_rawDescription
                        }
                    }
                }
            }
        `)
        let gifts = resultGifts.data.allSanityGift.edges;
        createPage({
            path: "/blog/" + page.slug.current,
            component: path.resolve("src/pages/blog.js"),
            context: {
				page: page,
				gifts : gifts
			}
        })
    }
    
        

}