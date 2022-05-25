function Footer() {
  const date = new Date();
  var years = 2022;
  const currentYear = date.getFullYear();

  if (currentYear != years) {
    years += `-${currentYear}`;
  }

  return (
    <footer>
      <p>© Marcin Bartmiński {years}</p>
    </footer>
  );
}

export default Footer;
