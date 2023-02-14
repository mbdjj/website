function getCurrentYear() {
  const today = new Date();

  return today.getFullYear();
}

export default function Footer() {
  return (
    <footer>
      <p>© Marcin Bartmiński 2022-{getCurrentYear()}</p>
    </footer>
  );
}
