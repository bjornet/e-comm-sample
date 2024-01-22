// import { useParams } from 'next/navigation';

import { FC } from 'react';

// add type to Page (this is a Next.js React Server Component)
const DetailsPage: FC<
  Readonly<{
    params: {
      slug: string;
    };
  }>
> = ({ params: { slug } }) => {
  console.log('DetailsPage');

  //   const { slug } = useParams<{ slug: string }>();
  //   const { data, error } = useDetailsQuery({
  //     variables: { slug },
  //   });

  //   if (error) {
  //     return <div>Error loading details</div>;
  //   }

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

  //   return <div>{data.details.title}</div>;

  return <div>{slug}</div>;
};

export default DetailsPage;
