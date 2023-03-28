import React, { Component, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import parse from "html-react-parser";
import DOMPurify from 'isomorphic-dompurify';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getCookie } from '../utils/setCookie';
import axios from 'axios';
import { useEffect } from 'react';

const MEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };
  const [tokenState, setToken] = useState("")
  useEffect(() => {
    let token = localStorage.getItem('token')
    setToken(token)
  }, [])

  let data = {
    "about": draftToHtml(convertToRaw(editorState.getCurrentContent()))
  };
  let config = {
    method: 'put',
    url: `${process.env.NEXT_PUBLIC_HOST}api/profile/about`,
    headers: {
      'Authorization': `Bearer ${tokenState}`
    },
    data: data
  };

  const saveAbout = () => {
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }



  // HTML received from the server
  const dirty = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  const clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });
  const Content = () => <div>{parse(clean)}</div>;

  return (
    <div>
      <div data-theme="light" className='border-2 rounded-md pb-52'>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          />
      </div>
      <button onClick={saveAbout} className="btn btn-primary my-2">Button</button>
      <Content />
    </div>
  )
}

export default MEditor