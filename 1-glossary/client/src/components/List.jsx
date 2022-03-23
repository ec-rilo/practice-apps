import Card from './Card.jsx';

const List = ({ notes }) => (
  <ul>
    {notes.map((note, index) => {
      return (
        <li key={index}>
          <Card note={note}/>
        </li>
      );
    })}
  </ul>
);

export default List;