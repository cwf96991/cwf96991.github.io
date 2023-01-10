import Base from "./base";
import { gql, useQuery, useMutation } from "@apollo/client";
// import { ApolloProvider } from '@apollo/client'
// import apolloClient from '../lib/apollo'
// import { UserProvider } from '@auth0/nextjs-auth0'
const AllLinksQuery = gql`
  query allLinksQuery($first: Int, $after: String) {
    links(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          imageUrl
          url
          title
          category
          description
          
        }
      }
    }
  }
`;

export default function Home() {
    const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
        variables: { first: 2 },
      });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  const { endCursor, hasNextPage } = data.links.pageInfo;
  const AwesomeLink = (props:any)=>{
    
    const {title,category,url,id,description,imageUrl} = props
    return <li key={id} className="shadow  max-w-md  rounded">
      <img alt={title} className="shadow-sm" src={imageUrl} />
    <div className="p-5 flex flex-col space-y-2">
      <p className="text-sm text-blue-500">{category}</p>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-gray-600">{description}</p>
      <a href={url} className="flex hover:text-blue-500">
        {url.replace(/(^\w+:|^)\/\//, '')}
        <svg
          className="w-4 h-4 my-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    </div>
  </li>
  }
  return (
    <Base title={"GraphQL Playground"}>
      <div className="flex items-center p-4 mx-auto min-h-screen justify-center">
      <div className="container mx-auto max-w-5xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.edges.map((node: any) => {
            return (
            <AwesomeLink
              title={node.node.title}
              category={node.node.category}
              url={node.node.url}
              id={node.node.id}
              description={node.node.description}
              imageUrl={node.node.imageUrl}
            />
          )})}
        </div>
        {hasNextPage ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.links.edges = [
                    ...prevResult.links.edges,
                    ...fetchMoreResult.links.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            more
          </button>
        ) : (
          <p className="my-10 text-center font-medium">
            You've reached the end!{" "}
          </p>
        )}
      </div>
      </div>
      </Base>
    
  )
}