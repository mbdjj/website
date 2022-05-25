function Footer() {

  const date = new Date()
  var years = 2022

  if (date.getFullYear() != years) {
    years += `-${date.getFullYear()}`
  }

  return (
    <footer>
      <p>© Marcin Bartmiński {years}</p>
    </footer>
  );
}

export default Footer;
