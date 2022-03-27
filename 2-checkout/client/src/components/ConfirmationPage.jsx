const React = 'react';

const Card = ({ title, text }) => (
  <li>
    <p>{title}: {text}</p>
  </li>
);

const filterData = (data) => {
  let newData = data.slice();

  newData = newData.filter((tuple) => {
    return !tuple[0].includes('id');
  });

  return newData;
};

const ConfirmationPage = ({ data, submitHandler }) => {
  const filteredData = filterData(data);
  console.log(filteredData);
  return (
    <div>
      <ul>
        {filteredData.map((tuple, index) => {
          return (
            <Card key={index} title={tuple[0]} text={tuple[1]}/>
          );
        })}
      </ul>
      <button type='submit' onClick={submitHandler}>Purchase</button>
    </div>
  );
};

export default ConfirmationPage;