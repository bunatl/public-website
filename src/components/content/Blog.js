import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Post from './blog/Post';
import BlogPostList from './blog/BlogPostList';

function Blog () {
  const [ education ] = useState([
    { mainTopic: "FIT, ČVUT", children: [ { name: "Semestr 1", link: "" }, { name: "Semestr 2", link: "" }, { name: "Semestr 3", link: "" }, { name: "Semestr 4", link: "" }, { name: "Semestr 5, 6, 7", link: "" }, { name: "Semestr 8", link: "" } ] },
    { mainTopic: "VŠFS", children: [ { name: "Semestr 1", link: "" }, { name: "Semestr 2", link: "" } ] },
    { mainTopic: "FIS, VŠE", children: [ { name: "Semestr 1", link: "" }, { name: "Semestr 2", link: "" }, { name: "Semestr 3", link: "" }, { name: "Semestr 4", link: "" } ] },
    { mainTopic: "Zahraniční studium", children: [ { name: "TU Delft", link: "" }, { name: "IIT Madras", link: "" }, { name: "KNU", link: "" } ] },
    { mainTopic: "FIT, ČVUT vs FIS, VŠE", children: [] },
    { mainTopic: "Kam na školu?", children: [ { name: "Výběr SŠ", link: "" }, { name: "Výběr VŠ (Bc)", link: "" }, { name: "Výběr VŠ (Ing)", link: "" } ] },
  ]);

  const [ travel ] = useState([
    { mainTopic: "Europe", children: [ { name: "Berlin Trip", link: "" }, { name: "Warszaw Trip", link: "" }, { name: "Spain East Cost", link: "" }, { name: "Luxemburg, Belgium and Paris", link: "" }, { name: "Southern Spain and Portugal", link: "" }, { name: "Greece and Bulgaria", link: "" }, { name: "Baltic trip", link: "" }, { name: "Balkan Trip", link: "" }, { name: "Italy and Romania", link: "" } ] },
    { mainTopic: "Asia", children: [ { name: "Through India", link: "" }, { name: "Around South-East Asia Pt 1", link: "" }, { name: "Travelling in South Korea", link: "" }, { name: "Around East and South-East Asia", link: "" } ] },
    { mainTopic: "Africa", children: [ { name: "Marocco", link: "" } ] },
    { mainTopic: "Middle-East", children: [ { name: "Isreal and Palestine", link: "" } ] },
  ]);

  const [ personal ] = useState([
    { mainTopic: "Podnikání, OSVČ, finanční gramotnost", children: [] },
    { mainTopic: "Přečtené knihy", children: [ { name: "Přečtené", link: "" }, { name: "Audio knihy", link: "" } ] },
    { mainTopic: "Tech Stuff", children: [] },
    { mainTopic: "Moje nápady", children: [] },
  ]);

  const [ filter, setFilter ] = useState("");

  return (
    <div id="blog">
      <Helmet>
        <title>{ `Blog | 📖 | I like to write about stuff` }</title>
        <meta name="description" content="I like to write about experiences that are happening to me and share them with others, with you - in hopes that they might be useful for someone else 🤗😉" />
      </Helmet>

      <h1>Blog</h1>
      {/* Search input */ }
      <InputGroup className="mb-3" id="blogSearchBar">
        <FormControl
          size="lg"
          placeholder="Search by tag, name or topic"
          aria-label="searchBar"
          aria-describedby="searchBar"
          onChange={ e => setFilter(e.target.value) }
        />
      </InputGroup>

      {/* lists */ }
      <div id="topicLists">
        {/* education */ }
        <BlogPostList
          prop={ education }
          name="Education"
          textFilter={ filter }
        />
        {/* travel */ }
        <BlogPostList
          prop={ travel }
          name="Travel"
          textFilter={ filter } />
        {/* personal */ }
        <BlogPostList
          prop={ personal }
          name="Personal"
          textFilter={ filter } />
      </div>

      {/* postPreview */ }
      {/* Will be mapped through array */ }
      <Post />
    </div>
  );
}

export default Blog;
