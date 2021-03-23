import React, {useEffect, useState} from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';





function RecentPosts(){

    let query = graphql`query MyQuery {
        allSanityPost {
          nodes {
            id
            title
            _rawIntroduction
            Image {
              _key
              _type
              _rawAsset
              _rawHotspot
              _rawCrop
            }
            slug {
              _key
              current
              _type
            }
            _rawImage
          }
        }
      }
      `;
    let recentPosts = useStaticQuery(query);

    let recentpostsDiv = recentPosts.allSanityPost.nodes.map((post)=>{
        console.log(post);
        return <>
        <div key={post.slug.current}
            className="post">
            <Link to = {`/blog/${post.slug.current}`}>                
                <div className="author">Author: Ivaylo Nikolov</div>
            </Link>
        </div>                    
        </>
    });

    return <div className="recent-posts mb-20">{recentpostsDiv}</div>
}

export default RecentPosts;