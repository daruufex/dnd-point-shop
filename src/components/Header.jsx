function Header({ points, maxPoints }) {
  return (
    <>
      <h1 className="text-3xl">💰 D&D Point Shop</h1>
      <p className="p-2">
        🪙 Current points: {points}/{maxPoints}
      </p>
    </>
  );
}

export default Header;
