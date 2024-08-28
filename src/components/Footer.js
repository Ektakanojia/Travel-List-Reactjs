export default function Footer({ items }) {
  if (!items.length)
    return <p className="footer"> 🚀start packing your items</p>;
  const numItem = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const numPercentage = Math.round((numPacked / numItem) * 100);
  return (
    <div className="footer">
      <em>
        {numPercentage === 100
          ? "you got everything ! Ready to go ✈️"
          : `🛍️You have ${numItem} item in your list ,and you already completed
        ${numPacked}(${numPercentage}%)`}
      </em>
    </div>
  );
}
