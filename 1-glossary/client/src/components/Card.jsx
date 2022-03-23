const Card = ({ note, removeNote }) => (
  <div>
    <h2>{note.word}</h2>
    <p>{note.definition}</p>
    <div>
      <button>Edit</button>
      <button onClick={() => removeNote(note._id)}>Delete</button>
    </div>
  </div>
);

export default Card;