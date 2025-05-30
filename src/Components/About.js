import React, { useContext } from 'react';
import NoteContext from '../Context/Notes/noteContext'

export const About = () => {
    const a = useContext( NoteContext )
  return (
    <div>About {a.state.class}</div>
  )
}
