export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You are ready to go! ✈️"
        : `💼 You have ${numItems} items on your list, and you have already packed
        ${numPackedItems} (${percentage}%)`}
    </footer>
  );
}
