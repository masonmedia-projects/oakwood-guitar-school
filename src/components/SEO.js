import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO() {
    
    // const meta = site.siteMetadata; 
    return (
    <StaticQuery
      query={graphql`
      {
        site {
          siteMetadata {
            description
            image
            imageAlt
            robots
            title
            type
            url
          }
        }
      }
    `
    }
      render={data => (
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="robots" content={data.site.siteMetadata.robots} />
            <meta name="googlebot" content={data.site.siteMetadata.robots} />
            {/* FB */}
            <meta property="og:url" content={data.site.siteMetadata.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:image" content={data.site.siteMetadata.image} />
            <meta property="og:image:alt" content={data.site.siteMetadata.imageAlt} />
            <meta property="og:description" content={data.site.siteMetadata.desciption} />
            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:locale" content="en_CA" />
            {/* twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@site_account" />
            <meta name="twitter:creator" content="@individual_account" />
            <meta name="twitter:url" content={data.site.siteMetadata.url} />
            <meta name="twitter:title" content={data.site.siteMetadata.title} />
            <meta name="twitter:description" content={data.site.siteMetadata.description} />
            <meta name="twitter:image" content={data.site.siteMetadata.image} />
            <meta name="twitter:image:alt" content={data.site.siteMetadata.imageAlt} />
        </Helmet>
      )}
    />    
    )
}






