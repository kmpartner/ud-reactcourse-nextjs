import { Fragment } from "react";
import Head from "next/head";
// import { MongoClient } from "mongodb";

import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://en.wikipedia.org/wiki/File:Monasterio_Khor_Virap,_Armenia,_2016-10-01,_DD_25.jpg",
    address: "Some address some city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://en.wikipedia.org/wiki/File:Clouds_over_the_Atlantic_Ocean.jpg",
    address: "Some address some city",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // id: meetup._id.toString(),
        id: meetup.id,
      })),
    },
    revalidate: 3600, // second
  }
}

export default HomePage;
