import { defineQuery } from "groq";

export const STARTUPS_QUERY = defineQuery(
  `*[_type=="startup" && defined(slug.current) && !defined($search)|| title match $search || category match $search || author->name match $search  ] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  description,
  views,
  image,
  author -> {
    id,
    name,
    username,
    image,
    bio
  }
}
    `
);

export const STARTUP_BY_ID_QUERY = defineQuery(
  `*[_type=="startup" && _id==$id][0]{
  _id,
  title,
  slug,
  _createdAt,
  description,
  views,
  image,
  category,
  pitch,
  author -> {
    id,
    name,
    username,
    image,
    bio
  }
}`
);

export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[_type=='startup' && _id==$id][0]{
  _id,
  views
}`);

export const AUTHOR_BY_GOOGLE_ID = defineQuery(`
*[_type=="author" && id==$id ][0]{
  _id,
  id,
  name,
  username,
  email,
  image,
  bio
}`);
