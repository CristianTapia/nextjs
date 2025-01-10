import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["ada lovelace", "grace hoper", "margaret hamiltom"];

  return (
    <div>
      <Header title="React" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
