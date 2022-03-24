import Card from './Card.jsx';

const List = ({ notes, removeNote, editNote }) => (
  <ul>
    {notes.map((note, index) => {
      return (
        <li key={index}>
          <Card note={note} removeNote={removeNote} editNote={editNote} />
        </li>
      );
    })}
  </ul>
);

export default List;