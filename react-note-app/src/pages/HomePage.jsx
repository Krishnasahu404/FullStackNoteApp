import React from 'react'
import Filter from '../components/filter'
import NoteCardContainer from '../components/NotesCardConatiner'

const HomePage = ({notes,loading,handleFilterText}) => {
  return (
    <>
    {notes.length < 1 ? (
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>
        There is no note found 
      </h4>
    ) : (
      <Filter handleFilterText={handleFilterText} />
    )}
    <NoteCardContainer notes={notes} loading={loading} />
  </>
  )
}

export default HomePage
