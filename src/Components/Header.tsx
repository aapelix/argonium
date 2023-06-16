//@ts-expect-error
function Header({ title }) {
  return (
    <div className="text-center w-full text-4xl font-bold mt-10">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
