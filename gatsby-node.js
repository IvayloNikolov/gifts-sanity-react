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
		console.log(page.id);
        let resultGifts = await graphql(`
            query MyQuery {
                allSanityGift(
                    filter: {GiftPost: {id: {eq: "${page.id}"}}}
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
							Link
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