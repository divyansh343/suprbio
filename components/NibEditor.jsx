import React from 'react'
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('nib-core').then((mod) => mod.Editor),
  { ssr: false }
)
const MyEditor = () => (
  <Editor />
);


export default MyEditor