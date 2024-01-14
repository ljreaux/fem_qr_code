import qr from "../assets/image-qr-code.png";
export default function Card() {
  return (
    <div className="card">
      <img src={qr} alt="qr-code" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}
