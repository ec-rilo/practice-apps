import Card from './Card.jsx';

const List = ({ notes, removeNote }) => (
  <ul>
    {notes.map((note, index) => {
      return (
        <li key={index}>
          <Card note={note} removeNote={removeNote}/>
        </li>
      );
    })}
  </ul>
);

export default List;