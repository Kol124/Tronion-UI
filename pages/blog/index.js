import Layout from "@/components/Layout";
import { API_URL, PER_PAGE } from "@/config/index";
import Banner from "@/components/Banner";

export default function HomePage({ posts, page, total }) {
  return (
    <Layout title="Blog">
      <Banner title="Latest Posts" />
      {posts.length === 0 && <h3>No posts to show</h3>}
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
