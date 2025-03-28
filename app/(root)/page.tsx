import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query

  const posts = [{
    _createdAt : 'Yesterday',
    views: 55,
    author : {_id: 1},
    _id: 1,
    description: 'This is a description.',
    image: 'https://unsplash.com/photos/steamed-buns-in-a-bamboo-steamer-c3U4xmOSWc8',
    category: 'Robots',
    title: "Xylem"
  }]
  return (
      <main className="">
        {/* Hero Section */}
        <section className="pink_container">
          <h1 className="heading">Pitch your startup<br/> Connect with entreprenuers</h1>
          <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.</p>
          <SearchForm query={query}/>
        </section>

        {/* Startup Cards */}
        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}" ` : "All Startups"}
          </p>

          <ul className="mt-7 card_grid">
              {posts?.length > 0 ? (
                posts.map((post: StartupCardType, index: number) =>)
              )}
          </ul>
        </section>
          
      </main>  
  );
}
