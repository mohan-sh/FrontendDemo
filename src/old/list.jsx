
function List() {
  return (
    <>
      <ol>
        <li>
          Fruits
          <ul className="custom-bullet-star">
            <li>Apple</li>
            <li>Banana</li>
            <li>Orange</li>
          </ul>
        </li>
        <li>
          Vegetables
          <ol type='i'>
            <li>Carrot</li>
            <li>Beetroot</li>
            <li>Beans</li>
          </ol>
        </li>
        <li>
          Birds
          <ul className="custom-bullet-hash">
            <li>Parrot</li>
            <li>Peacock</li>
            <li>Crow</li>
          </ul>
        </li>
      </ol>
    </>
  );
}

export default List;