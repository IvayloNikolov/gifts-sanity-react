import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, url }) => {
    return <StaticQuery query ={query} render={ data =>{
		const metaDescription = description || data.site.siteMetadata.description;
		const metaTitle = title || data.site.siteMetadata.title;
		const metaimage = image || data.site.siteMetadata.image;
		const metaUrl = url || data.site.siteMetadata.url;
		return <Helmet 
		title={metaTitle}
		meta = {[
			{
				name: 'description',
				content: metaDescription
			},
			{
				name: 'og:image',
				content: metaimage
			},
			{
				name: 'og:description',
				content: metaDescription
			},
			{
				name: 'og:type',
				content: 'website'
			},
			{
				name: 'og:url',
				content: metaUrl
			}
		]} />
    }} />
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
  }`;