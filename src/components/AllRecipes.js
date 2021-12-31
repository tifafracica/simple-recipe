import React from "react"
import ListRecipes from "./ListRecipes"
import TagsRecipes from "./TagsRecipes"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section className="recipes-container">
      <TagsRecipes recipes={recipes} />
      <ListRecipes recipes={recipes} />
    </section>
  )
}

export default AllRecipes
