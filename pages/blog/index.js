import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";
import Banner from "@/components/Banner";
import EventItem from "@/components/EventItem";

export default function HomePage({ posts, page, total }) {
  return (
    <Layout title="Blog">
      <Banner title="Latest Posts" />
      {posts.length === 0 && <h3>No posts to show</h3>}

      {posts.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/posts/count`);
  const total = await totalRes.json();

  // Fetch posts
  const eventRes = await fetch(
    `${API_URL}/posts?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const posts = await eventRes.json();

  return {
    props: { posts, page: +page, total },
  };
}
