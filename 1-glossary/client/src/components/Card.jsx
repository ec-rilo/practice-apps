const Card = ({ note }) => (
  <div>
    <h2>{note.word}</h2>
    <p>{note.definition}</p>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
);

export default Card;