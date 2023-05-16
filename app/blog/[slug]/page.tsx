import React from "react";
import axios from "axios";

type Props = {
  params: {
    slug: string;
  };
};

const delayLoad = (ms: number) => new Promise((res) => setTimeout(res, ms));

const BlogSlugPage = async ({ params }: Props) => {
  await delayLoad(5000);

  const { data } = await axios.post(
    "https://official-joke-api.appspot.com/random_joke"
  );
  return (
    <div>
      {params.slug}
      API data = {JSON.stringify(data)}
    </div>
  );
};

export default BlogSlugPage;
