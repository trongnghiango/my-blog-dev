const OWNER = 'trongnghiango';
const REPO_NAME = 'my-blog-dev'

export function discussionGraphql(ghDiscussionCategoryId: string | undefined) {
  return `{
    repository(owner: "${OWNER}", name: "${REPO_NAME}") {
      discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
        nodes {
          title
          url
          number
          bodyHTML
          bodyText
          createdAt
          lastEditedAt
          author {
            login
            url
            avatarUrl
          }
           labels(first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }`
}

// Single post
export function discussionDetailGql(postId: number | undefined) {
  return `{
    repository(owner: "${OWNER}", name: "${REPO_NAME}") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
