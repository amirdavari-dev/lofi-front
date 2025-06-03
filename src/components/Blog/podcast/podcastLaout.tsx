import PodcastPlayer from "./podcastPlayer";
type PodcastLayoutType = {
  podcastSrc: string;
};
const PodcastLayout = ({ podcastSrc }: PodcastLayoutType) => {
  return (
    <>
      <section className="blog-podcast-section">
        <PodcastPlayer src={podcastSrc} />
      </section>
      <section className="blog-why-podcast-section">
        <h4>Why should you listen to podcasts?</h4>
        <p>
          If you are a real estate agent, a strong social media presence is a
          must for you. If you&apos;re looking to connect with more clients,
          showcase your properties effectively, and ultimately close more deals
        </p>
      </section>
    </>
  );
};
export default PodcastLayout;
