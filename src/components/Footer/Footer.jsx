import "./Footer.css";

function Footer() {
  return (
    <footer className="footer__section">
      <div> Developed By Terrell Rolland </div>{" "}
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;
