import Layout from "@/components/Layout";
// import { API_URL, PER_PAGE } from "@/config/index";
import { Heading } from "@/components/common";

export default function HomePage() {
  return (
    <Layout title="Blog">
      {/* {!posts.length && <h3>No posts to show</h3>} */}
      <Heading className="center">No Posts</Heading>
    </Layout>
  );
}

// export async function getServerSideProps({ query: { page = 1 } }) {
//   // Calculate start page
//   const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

//   return {
//     props: { posts, page: +page, total },
//   };
// }
