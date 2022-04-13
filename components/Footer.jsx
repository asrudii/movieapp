import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h2 className="logo">Movie App</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, unde
          voluptatem laborum ducimus ipsa a quisquam nemo harum itaque ea minus
          quod aspernatur provident accusantium. Nam exercitationem doloremque
          mollitia maiores.
        </p>
      </div>
      <div>
        <h2>Custom Service</h2>
        <p>Help & Contact</p>
        <p>Return Policy</p>
        <p>Careers</p>
      </div>
      <div>
        <h2>Team Us</h2>
        <p>Jonathan</p>
        <p>Jhon Doe</p>
        <p>Steven Levi</p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <div>
          <FiPhone size={20} />
          <span>+62 8128878xxx</span>
        </div>
        <div>
          <FiMail size={20} />
          <span>admin@movie.com</span>
        </div>
        <div>
          <FiMapPin size={20} />
          <span>Street Dustira No.1 Cimahi</span>
        </div>
      </div>
    </div>
  );
}
