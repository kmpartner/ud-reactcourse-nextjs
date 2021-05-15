import { Fragment } from "react";
import Head from "next/head";
// import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  // console.log(props);
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description}></meta>
      </Head>
      {/* <MeetupDetail
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      /> */}
      <MeetupDetail
        image="https://en.wikipedia.org/wiki/File:Monasterio_Khor_Virap,_Armenia,_2016-10-01,_DD_25.jpg"
        title="A First Meetup"
        address="Some address some city"
        description="This is a first meetup!"
      />
      {/* <img
        src=""
        alt={props.title}
      />
      <h1></h1>
      <address></address>
      <p></p> */}
    </Fragment>
  );
}

export async function getStaticPaths(props) {
  return {
    // fallback: "blocking",
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        address: "Some address some city",
        image:
          "https://en.wikipedia.org/wiki/File:Monasterio_Khor_Virap,_Armenia,_2016-10-01,_DD_25.jpg",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
